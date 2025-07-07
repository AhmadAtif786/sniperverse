'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiSettings, FiActivity, FiEdit2, FiSave, FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '@/hooks/useAuth';
import ProtectedRoute from '@/components/ProtectedRoute';
import { toast } from 'react-toastify';
import { editProfile } from '@/store/slices/authSlice';

export default function ProfilePage() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { loading, error, subscription } = useSelector((state) => state.auth);
  const [isEditingTelegram, setIsEditingTelegram] = useState(false);
  const [telegramHandle, setTelegramHandle] = useState(user?.telegramHandle || '');

  const handleTelegramEdit = async () => {
    if (!isEditingTelegram) {
      setIsEditingTelegram(true);
      return;
    }

    try {
      console.log('Chaanign the following telegram handle', telegramHandle);
      const result = await dispatch(editProfile({
        telegram_username: telegramHandle,
        userId: user?.id
      })).unwrap();

      toast.success('Telegram handle updated successfully!');
      setIsEditingTelegram(false);
    } catch (error) {
      toast.error(error || 'Failed to update telegram handle');
    }
  };

  const cancelTelegramEdit = () => {
    setTelegramHandle(user?.telegramHandle || '');
    setIsEditingTelegram(false);
  };

  return (
    <ProtectedRoute>
    <main className="bg-[#0a0a12] text-white font-['Sora'] min-h-screen">
      <section className="relative min-h-screen px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 bg-[length:100px_100px] z-0" />
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
                Your Profile
              </h1>
              <p className="text-blue-200">
                Manage your SnipersVerse account
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-6"
              >
                <div className="flex items-center mb-6">
                  <FiUser className="text-2xl text-blue-400 mr-3" />
                  <h2 className="text-xl font-bold">Account Information</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-blue-200 mb-1">Username</label>
                    <div className="p-3 bg-[#0f172a] border border-gray-800 rounded-lg">
                      {user?.username || 'Not set'}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-blue-200 mb-1">Email</label>
                    <div className="p-3 bg-[#0f172a] border border-gray-800 rounded-lg">
                      {user?.email || 'Not set'}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-blue-200 mb-1">Telegram Handle</label>
                    <div className="flex items-center gap-2">
                      {isEditingTelegram ? (
                        <input
                          type="text"
                          value={telegramHandle}
                          onChange={(e) => setTelegramHandle(e.target.value)}
                          placeholder="@username"
                          className="flex-1 p-3 bg-[#0f172a] border border-blue-500 rounded-lg text-white focus:outline-none focus:border-blue-400"
                        />
                      ) : (
                        <div className="flex-1 p-3 bg-[#0f172a] border border-gray-800 rounded-lg">
                          {user?.telegramHandle || telegramHandle || 'Not set'}
                        </div>
                      )}
                      <div className="flex gap-2">
                        {isEditingTelegram ? (
                          <>
                                                         <motion.button
                               onClick={handleTelegramEdit}
                               disabled={loading}
                               className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:opacity-50"
                               whileHover={{ scale: 1.05 }}
                               whileTap={{ scale: 0.95 }}
                             >
                               {loading ? (
                                 <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                               ) : (
                                 <FiSave className="w-4 h-4" />
                               )}
                             </motion.button>
                             <motion.button
                               onClick={cancelTelegramEdit}
                               disabled={loading}
                               className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50"
                               whileHover={{ scale: 1.05 }}
                               whileTap={{ scale: 0.95 }}
                             >
                               <FiX className="w-4 h-4" />
                             </motion.button>
                          </>
                        ) : (
                          <motion.button
                            onClick={handleTelegramEdit}
                            className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FiEdit2 className="w-4 h-4" />
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-blue-200 mb-1">Member Since</label>
                    <div className="p-3 bg-[#0f172a] border border-gray-800 rounded-lg">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}
                    </div>
                  </div>
                </div>

                <motion.button
                  className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSettings className="inline mr-2" />
                  Edit Profile
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#0a0a18] border border-blue-900/50 rounded-xl p-6"
              >
                <div className="flex items-center mb-6">
                  <FiActivity className="text-2xl text-purple-400 mr-3" />
                  <h2 className="text-xl font-bold">SnipersVerse Activity</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-[#0f172a] border border-gray-800 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-blue-200">Subscription Plan</span>
                      <span className="text-lg font-bold text-white">
                        {subscription?.plan ? subscription.plan.charAt(0).toUpperCase() + subscription.plan.slice(1) : 'Free Tier'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">Current subscription plan</p>
                  </div>

                  {subscription?.plan && (
                    <div className="p-4 bg-[#0f172a] border border-gray-800 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-blue-200">Plan Status</span>
                        <span className={`text-lg font-bold ${
                          subscription.status === 'active' ? 'text-green-400' :
                          subscription.status === 'expired' ? 'text-red-400' :
                          subscription.status === 'cancelled' ? 'text-orange-400' :
                          'text-gray-400'
                        }`}>
                          {subscription.status ? subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1) : 'Unknown'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">Subscription status</p>
                    </div>
                  )}

                  {subscription?.expiresAt && (
                    <div className="p-4 bg-[#0f172a] border border-gray-800 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-blue-200">Expires On</span>
                        <span className="text-lg font-bold text-white">
                          {new Date(subscription.expiresAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">Plan expiration date</p>
                    </div>
                  )}
                </div>

                <motion.a
                  href="/pricing"
                  className="block w-full mt-6 py-3 px-4 text-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {subscription?.plan && subscription?.status === 'active' ? 
                    '⭐ Manage Plan' : 
                    subscription?.plan && subscription?.status === 'expired' ? 
                    '🔄 Renew Plan' : 
                    '💸 Upgrade Plan'
                  }
                </motion.a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 bg-[#0a0a18] border border-blue-900/50 rounded-xl p-6"
            >
              <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <motion.a
                  href="https://t.me/SnipersVerseBot?start=start"
                  className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-center font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ⚡ Launch Bot
                </motion.a>
                
                <motion.a
                  href="/roadmap"
                  className="p-4 bg-[#0f172a] border border-blue-900/50 text-blue-200 rounded-lg text-center font-bold hover:bg-blue-900/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📋 View Roadmap
                </motion.a>
                
                <motion.a
                  href="/join"
                  className="p-4 bg-[#0f172a] border border-purple-900/50 text-purple-200 rounded-lg text-center font-bold hover:bg-purple-900/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Join Community
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
    </ProtectedRoute>
  );
} 