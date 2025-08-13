'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';

export default function ProtectedRoute({ children, redirectTo = '/login' }) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();


  useEffect(() => {
    if (!loading && !isAuthenticated) {
      console.log('ProtectedRoute - User not authenticated, showing auth screen');
    }
  }, [isAuthenticated, loading]);

  if (loading) {
    return (
      <div className="bg-[#0a0a12] text-white font-['Sora'] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-blue-200">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="bg-[#0a0a12] text-white font-['Sora'] min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a0a18] border border-red-900/50 rounded-xl p-8"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Authentication Required</h2>
            <p className="text-gray-300 mb-6">
              You need to be logged in to access this page. Please sign in to continue.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => router.push('/login')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Sign In
              </button>
              <button
                onClick={() => router.push('/')}
                className="w-full bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-all"
              >
                Go to Homepage
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return children;
} 