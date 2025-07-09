'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { FiCreditCard, FiShield, FiCheck, FiArrowLeft } from 'react-icons/fi';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import ProtectedRoute from '@/components/ProtectedRoute';
import phantomIcon from '@/assets/phantom-icon.png';
import trustwalletIcon from '@/assets/trustwallet-icon.png';
import metamaskIcon from '@/assets/metamask-icon.png';
import { toast } from 'react-toastify';
import { createSubscription, confirmPayment, clearPaymentState, clearError } from '@/store/slices/paymentSlice';
import { Connection, Transaction, clusterApiUrl } from '@solana/web3.js';

function CheckoutPageContent() {
  const PaymentKey = process.env.NEXT_PUBLIC_PAYMENT_KEY;
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const { user } = useAuth();
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isProcessing, transaction, transactionId, error, success } = useSelector((state) => state.payment);
  
  const plan = searchParams.get('plan');
  const price = searchParams.get('price');

  useEffect(() => {
    return () => {
      dispatch(clearPaymentState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (success) {
      router.push('/profile?success=true');
    }
  }, [success, router]);

    const wallets = [
  
    {
      name: 'Phantom',
      id: 'phantom',
      icon: phantomIcon,
      description: 'Most popular Solana wallet'
    },
    {
      name: 'Trust Wallet',
      id: 'trust',
      icon: trustwalletIcon,
      description: 'Multi-chain crypto wallet'
    },
    {
      name: 'MetaMask',
      id: 'metamask',
      icon: metamaskIcon,
      description: 'Popular Ethereum wallet'
    }
  ];

  const connectWallet = async (walletId) => {
    if (walletId === 'trust' || walletId === 'metamask') {
      toast.info('This wallet will be available soon!');
      return;
    }

    setIsConnecting(true);
    setSelectedWallet(walletId);

    try {
      let provider = null;

      if (walletId === 'phantom') {
        if (typeof window !== 'undefined' && window.solana && window.solana.isPhantom) {
          provider = window.solana;
          const response = await provider.connect();
          setWalletAddress(response.publicKey.toString());
        } else {
          toast.error('Phantom wallet not detected. Please install Phantom wallet extension.');
          setIsConnecting(false);
          return;
        }
      }
    } catch (error) {
      console.error('Wallet connection failed:', error);
      toast.error('Failed to connect wallet. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  };

  const processPayment = async () => {
    if (!walletAddress) return;

    const paymentData = {
      plan,
      price,
      walletAddress,
      walletType: selectedWallet,
      userId: user?.id
    };

    try {
      const result = await dispatch(createSubscription(paymentData)).unwrap();
      
      if (selectedWallet === 'phantom' && typeof window !== 'undefined' && window.solana) {
        try {
          const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
          
          const transaction = Transaction.from(
            Buffer.from(result.transaction, 'base64')
          );
          
          const signedTransaction = await window.solana.signTransaction(transaction);
          const rawTransaction = signedTransaction.serialize();
          
          toast.info('Broadcasting transaction...');
          const signature = await connection.sendRawTransaction(rawTransaction);
          
          toast.info('Waiting for confirmation...');
          const confirmation = await connection.confirmTransaction(signature, 'confirmed');
          
          if (confirmation.value.err) {
            throw new Error('Transaction failed: ' + JSON.stringify(confirmation.value.err));
          }

          const confirmResult = await dispatch(confirmPayment({
            subscription_id: result.subscription_id,
            transaction_id: result.transactionId,
            signature: signature,
            key: PaymentKey
          })).unwrap();
          if (confirmResult.status === 'confirmed') {
          toast.success('Payment successful! Redirecting...');
            setTimeout(() => {
              router.push('/profile?success=true');
            }, 2000);
          } else {
            
            toast.error('Transaction failed: ' + JSON.stringify(confirmResult.value.err));
          }

        } catch (txError) {
          console.error('Transaction Error:', txError);
          toast.error('Transaction Error: ' + (txError.message || 'Please try again.'));
        }
      } 
      else if (selectedWallet === 'metamask' && typeof window !== 'undefined' && window.ethereum) {
        try {
          const provider = window.ethereum;
          
          const transactionParams = {
            to: result.recipient,
            value: result.amount,
            data: result.data || '0x',
            gas: result.gasLimit || '0x5208',
            gasPrice: result.gasPrice || '0x9184e72a000'
          };

          toast.info('Please confirm the transaction in MetaMask...');
          const txHash = await provider.request({
            method: 'eth_sendTransaction',
            params: [transactionParams],
          });

          toast.info('Broadcasting transaction...');
          
          let receipt = null;
          let attempts = 0;
          const maxAttempts = 60;

          while (!receipt && attempts < maxAttempts) {
            try {
              receipt = await provider.request({
                method: 'eth_getTransactionReceipt',
                params: [txHash],
              });
              
              if (!receipt) {
                await new Promise(resolve => setTimeout(resolve, 2000));
                attempts++;
              }
            } catch (error) {
              await new Promise(resolve => setTimeout(resolve, 2000));
              attempts++;
            }
          }

          if (!receipt) {
            throw new Error('Transaction confirmation timeout');
          }

          if (receipt.status === '0x0') {
            throw new Error('Transaction was reverted');
          }

          const confirmResult = await dispatch(confirmPayment({
            subscription_id: result.subscription_id,
            transaction_id: result.transactionId,
            signature: txHash
          })).unwrap();

          toast.success('Payment successful! Redirecting...');
          setTimeout(() => {
            router.push('/profile?success=true');
          }, 2000);

        } catch (txError) {
          console.error('MetaMask transaction failed:', txError);
          toast.error('Transaction failed: ' + (txError.message || 'Please try again.'));
        }
      }
      else if (selectedWallet === 'trust') {
        try {
          let txHash;
          
          if (result.blockchain === 'ethereum' && window.ethereum) {
            const provider = window.ethereum;
            
            const transactionParams = {
              to: result.recipient,
              value: result.amount,
              data: result.data || '0x',
              gas: result.gasLimit || '0x5208',
              gasPrice: result.gasPrice || '0x9184e72a000'
            };

            toast.info('Please confirm the transaction in Trust Wallet...');
            txHash = await provider.request({
              method: 'eth_sendTransaction',
              params: [transactionParams],
            });

            toast.info('Broadcasting transaction...');
            
            let receipt = null;
            let attempts = 0;
            const maxAttempts = 60;

            while (!receipt && attempts < maxAttempts) {
              try {
                receipt = await provider.request({
                  method: 'eth_getTransactionReceipt',
                  params: [txHash],
                });
                
                if (!receipt) {
                  await new Promise(resolve => setTimeout(resolve, 2000));
                  attempts++;
                }
              } catch (error) {
                await new Promise(resolve => setTimeout(resolve, 2000));
                attempts++;
              }
            }

            if (!receipt) {
              throw new Error('Transaction confirmation timeout');
            }

            if (receipt.status === '0x0') {
              throw new Error('Transaction was reverted');
            }

          } else if (result.blockchain === 'solana' && window.solana) {
            const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');
            
            const transaction = Transaction.from(
              Buffer.from(result.transaction, 'base64')
            );
            
            const signedTransaction = await window.solana.signTransaction(transaction);
            const rawTransaction = signedTransaction.serialize();
            
            toast.info('Broadcasting transaction...');
            txHash = await connection.sendRawTransaction(rawTransaction);
            
            toast.info('Waiting for confirmation...');
            const confirmation = await connection.confirmTransaction(txHash, 'confirmed');
            
            if (confirmation.value.err) {
              throw new Error('Transaction failed: ' + JSON.stringify(confirmation.value.err));
            }
          } else {
            throw new Error('Unsupported blockchain or wallet not available');
          }

          const confirmResult = await dispatch(confirmPayment({
            subscription_id: result.subscription_id,
            transaction_id: result.transactionId,
            signature: txHash
          })).unwrap();

          toast.success('Payment successful! Redirecting...');
          setTimeout(() => {
            router.push('/profile?success=true');
          }, 2000);

        } catch (txError) {
          console.error('Trust Wallet transaction failed:', txError);
          toast.error('Transaction failed: ' + (txError.message || 'Please try again.'));
        }
      }
      else {
        toast.error('Wallet not available for transaction signing.');
      }
    } catch (error) {
      console.error('Payment processing failed:', error);
      toast.error(error.message || 'Payment processing failed. Please try again.');
    }
  };

  return (
    <ProtectedRoute>
      <main className="bg-[#0a0a12] text-white font-['Sora'] min-h-screen">
        <section className="relative min-h-screen px-6 py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 bg-[length:100px_100px] z-0" />
          <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent z-0" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <button
                onClick={() => router.back()}
                className="flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
              >
                <FiArrowLeft className="mr-2" />
                Back to Pricing
              </button>

              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
                  Complete Your Subscription
                </h1>
                <p className="text-blue-200">
                  Pay with crypto to unlock {plan} tier features
                </p>
              </div>

              <div className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-8">
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Subscription Details</h2>
                  <div className="flex justify-between items-center p-4 bg-[#0f172a] rounded-lg">
                    <div>
                      <h3 className="font-bold">{plan} Plan</h3>
                      <p className="text-blue-200 text-sm">Monthly subscription</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{price}</div>
                      <div className="text-blue-200 text-sm">/month</div>
                    </div>
                  </div>
                </div>

                {!walletAddress ? (
                  <div>
                    <h2 className="text-xl font-bold mb-6 flex items-center">
                      <FiCreditCard className="mr-2" />
                      Connect Your Wallet
                    </h2>
                    
                    <div className="space-y-4">
                      {wallets.map((wallet) => (
                        <motion.button
                          key={wallet.id}
                          onClick={() => connectWallet(wallet.id)}
                          disabled={isConnecting || wallet.id === 'trust' || wallet.id === 'metamask'}
                          className={`w-full p-4 bg-[#0f172a] border border-gray-800 rounded-lg transition-all flex items-center justify-between ${
                            wallet.id === 'trust' || wallet.id === 'metamask' 
                              ? 'opacity-50 cursor-not-allowed' 
                              : 'hover:border-blue-500/50 disabled:opacity-50'
                          }`}
                          whileHover={{ scale: wallet.id === 'trust' || wallet.id === 'metamask' ? 1 : 1.02 }}
                          whileTap={{ scale: wallet.id === 'trust' || wallet.id === 'metamask' ? 1 : 0.98 }}
                        >
                                                   <div className="flex items-center">
                           <div className="w-10 h-10 mr-4 flex-shrink-0">
                             <Image
                               src={wallet.icon}
                               alt={`${wallet.name} icon`}
                               width={40}
                               height={40}
                               className="w-full h-full object-contain rounded-lg"
                             />
                           </div>
                           <div className="text-left">
                             <div className="font-bold">{wallet.name}</div>
                             <div className="text-sm text-blue-200">{wallet.description}</div>
                           </div>
                         </div>
                          {isConnecting && selectedWallet === wallet.id ? (
                            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                          ) : wallet.id === 'trust' || wallet.id === 'metamask' ? (
                            <div className="text-gray-500">Coming Soon</div>
                          ) : (
                            <div className="text-blue-400">Connect</div>
                          )}
                        </motion.button>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                      <div className="flex items-start">
                        <FiShield className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-blue-300">Secure Payment</h4>
                          <p className="text-sm text-blue-200 mt-1">
                            Your wallet connection is secure and encrypted. We never store your private keys.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-xl font-bold mb-6 flex items-center text-green-400">
                      <FiCheck className="mr-2" />
                      Wallet Connected
                    </h2>
                    
                    <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg mb-6">
                      <div className="font-medium">Connected Wallet:</div>
                      <div className="text-sm text-green-300 font-mono mt-1">
                        {walletAddress.slice(0, 8)}...{walletAddress.slice(-8)}
                      </div>
                      <div className="text-sm text-blue-200 mt-1">
                        {wallets.find(w => w.id === selectedWallet)?.name}
                      </div>
                    </div>

                    <div className="mb-6 p-4 bg-[#0f172a] rounded-lg">
                      <h3 className="font-bold mb-2">Payment Summary</h3>
                      <div className="flex justify-between items-center">
                        <span>Subscription ({plan})</span>
                        <span>{price}/month</span>
                      </div>
                      <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-700">
                        <span className="font-bold">Total</span>
                        <span className="font-bold text-lg">{price}</span>
                      </div>
                    </div>

                    <motion.button
                      onClick={processPayment}
                      disabled={isProcessing}
                      className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50"
                      whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                      whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                    >
                      {isProcessing ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Processing Payment...
                        </div>
                      ) : (
                        `Pay ${price} with Crypto`
                      )}
                    </motion.button>

                    <button
                      onClick={() => setWalletAddress(null)}
                      className="w-full mt-4 py-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Change Wallet
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="bg-[#0a0a12] text-white font-['Sora'] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-blue-200">Loading checkout...</p>
        </div>
      </div>
    }>
      <CheckoutPageContent />
    </Suspense>
  );
} 