'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter, useSearchParams } from 'next/navigation';
import { FiMail, FiArrowLeft, FiRefreshCw } from 'react-icons/fi';
import Link from 'next/link';
import { verifyOTP, resendOTP, clearError } from '@/store/slices/authSlice';

function VerifyOTPContent() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(0);
  const [resendCount, setResendCount] = useState(0);

  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);
  
  const email = searchParams.get('email');
  const userData = searchParams.get('userData');

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length !== 6) return;

    const userDataObj = userData ? JSON.parse(decodeURIComponent(userData)) : null;
    dispatch(verifyOTP({ otp: otpString, email, userData: userDataObj }));
  };

  const handleResend = async () => {
    if (resendCount >= 1 || resendTimer > 0) return;
    
    const userDataObj = userData ? JSON.parse(decodeURIComponent(userData)) : null;
    dispatch(resendOTP({ email, userData: userDataObj }));
    setResendTimer(90);
    setResendCount(prev => prev + 1);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <main className="bg-[#0a0a12] text-white font-['Sora'] min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 bg-[length:100px_100px] z-0" />
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent z-0" />
        
        <div className="relative z-10 w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <FiMail className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
                Verify Your Email
              </h1>
              <p className="text-blue-200 mb-2">
                We've sent a verification code to
              </p>
              <p className="text-blue-400 font-medium">
                {email}
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-3 bg-red-900/20 border border-red-500/50 rounded-lg text-red-300 text-sm"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-4 text-center">
                  Enter the 6-digit code
                </label>
                <div className="flex justify-center space-x-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      maxLength={1}
                      className="w-12 h-12 text-center bg-[#0f172a] border border-gray-800 rounded-lg text-white text-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="0"
                    />
                  ))}
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={loading || otp.join('').length !== 6}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? 'Verifying...' : 'Verify Email'}
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm mb-4">
                Didn't receive the code?
              </p>
              <button
                onClick={handleResend}
                disabled={resendTimer > 0 || resendCount >= 1}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiRefreshCw className={`w-4 h-4 ${resendTimer > 0 ? 'animate-spin' : ''}`} />
                <span>
                  {resendTimer > 0 
                    ? `Resend in ${formatTime(resendTimer)}` 
                    : resendCount >= 1 
                      ? 'Resend limit reached' 
                      : 'Resend Code'
                  }
                </span>
              </button>
            </div>

            <div className="mt-8 text-center">
              <Link 
                href="/signup" 
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                <FiArrowLeft className="w-4 h-4" />
                <span>Back to Signup</span>
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-4">Quick Access</p>
                <motion.a
                  href={process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ⚡ Launch Bot
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function LoadingFallback() {
  return (
    <main className="bg-[#0a0a12] text-white font-['Sora'] min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 bg-[length:100px_100px] z-0" />
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent z-0" />
        
        <div className="relative z-10 w-full max-w-md">
          <div className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <FiMail className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
                Loading...
              </h1>
              <p className="text-blue-200">
                Please wait while we load the verification page
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function VerifyOTPPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <VerifyOTPContent />
    </Suspense>
  );
} 