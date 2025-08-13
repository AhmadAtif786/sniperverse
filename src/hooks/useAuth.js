import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { verifyToken } from '@/store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized) {
      const token = localStorage.getItem('token');
      if (token) {
        dispatch(verifyToken());
      }
      setInitialized(true);
    }
  }, [dispatch, initialized]);


  return {
    user,
    isAuthenticated,
    loading,
    error,
    initialized,
  };
}; 