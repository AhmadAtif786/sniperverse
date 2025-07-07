'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyToken } from '@/store/slices/authSlice';

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    const initializeAuth = async () => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token && !isAuthenticated && !loading) {
          try {
            await dispatch(verifyToken()).unwrap();
          } catch (error) {
            console.log('Token verification failed:', error);
            localStorage.removeItem('token');
          }
        }
      }
    };

    initializeAuth();
  }, [dispatch, isAuthenticated, loading]);

  return children;
} 