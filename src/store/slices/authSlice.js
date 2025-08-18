import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { logger } from '../../utils/logger';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        return rejectWithValue(data.detail || data.message || 'Signup failed');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

export const verifyOTP = createAsyncThunk(
  'auth/verifyOTP',
  async ({ otp, email, userData }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp, email, userData }),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.detail || data.message || 'OTP verification failed');
      }

      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

export const resendOTP = createAsyncThunk(
  'auth/resendOTP',
  async ({ email, userData }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/resend-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, userData }),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.detail || data.message || 'Failed to resend OTP');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

export const sendForgotPasswordOTP = createAsyncThunk(
  'auth/sendForgotPasswordOTP',
  async ({ email }, { rejectWithValue }) => {
    try {
      logger.info(`Sending forgot password OTP to email: ${email}`, 'AuthSlice', 'sendForgotPasswordOTP');

      const response = await fetch(`${API_BASE_URL}/api/v1/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      logger.info(`Forgot password OTP response: ${response.status} - ${JSON.stringify(data)}`, 'AuthSlice', 'sendForgotPasswordOTP_response');

      if (!response.ok) {
        return rejectWithValue(data.detail || data.message || 'Failed to send reset code');
      }

      return data;
    } catch (error) {
      logger.error(`Forgot password OTP error: ${error.message}`, 'AuthSlice', 'sendForgotPasswordOTP_error');
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

export const verifyForgotPasswordOTP = createAsyncThunk(
  'auth/verifyForgotPasswordOTP',
  async ({ otp, email }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/verify-forgot-password-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.detail || data.message || 'Invalid reset code');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ email, otp, newPassword }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.detail || data.message || 'Failed to reset password');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

export const resendForgotPasswordOTP = createAsyncThunk(
  'auth/resendForgotPasswordOTP',
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/resend-forgot-password-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.detail || data.message || 'Failed to resend reset code');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data.detail || 'Login failed');
      }

      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem('token');
      window.location.reload();
      return {};
    } catch (error) {
      localStorage.removeItem('token');
      window.location.reload();
      return rejectWithValue(error.message || 'Logout failed');
    }
  }
);

export const verifyToken = createAsyncThunk(
  'auth/verifyToken',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return rejectWithValue('No token found');
      }

      const response = await fetch(`${API_BASE_URL}/api/v1/auth/verify`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        localStorage.removeItem('token');
        return rejectWithValue(data.message || 'Token verification failed');
      }

      return data;
    } catch (error) {
      localStorage.removeItem('token');
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

export const editProfile = createAsyncThunk(
  'auth/edit-profile',
  async (profileData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return rejectWithValue('No token found');
      }

      const response = await fetch(`${API_BASE_URL}/api/v1/user/edit-profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(profileData),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message || 'Profile update failed');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

export const fetchSnipeHistory = createAsyncThunk(
  'auth/fetchSnipeHistory',
  async ({ userId, limit = 50, offset = 0 }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return rejectWithValue('No token found');
      }

      const response = await fetch(`${API_BASE_URL}/api/v1/user/snipe-history?user_id=${userId}&limit=${limit}&offset=${offset}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log('fetchSnipeHistory response:', { status: response.status, data });

      if (!response.ok) {
        return rejectWithValue(data.message || 'Failed to fetch snipe history');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

export const fetchSnipeAnalytics = createAsyncThunk(
  'auth/fetchSnipeAnalytics',
  async ({ userId }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return rejectWithValue('No token found');
      }

      const response = await fetch(`${API_BASE_URL}/api/v1/user/snipe-analytics?user_id=${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log('fetchSnipeAnalytics response:', { status: response.status, data });

      if (!response.ok) {
        return rejectWithValue(data.message || 'Failed to fetch snipe analytics');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  success: null,
  subscription: {
    plan: null,
    status: null,
    expiresAt: null,
  },
  snipeHistory: [],
  snipeAnalytics: null,
  historyLoading: false,
  analyticsLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = null;
    },
    resetAuth: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      state.subscription = {
        plan: null,
        status: null,
        expiresAt: null,
      };
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = action.payload?.message || 'OTP sent successfully';
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.subscription = {
          plan: null,
          status: null,
          expiresAt: null,
        };
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          id: action.payload.id,
          username: action.payload.username,
          email: action.payload.email || null,
          telegramHandle: action.payload.telegram_username || null,
          createdAt: action.payload.created_at || null,
        };
        state.token = action.payload.token;
        state.subscription = {
          plan: action.payload.subscription_plan || null,
          status: action.payload.plan_status || null,
          expiresAt: action.payload.plan_expires_at || null,
        };
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.subscription = {
          plan: null,
          status: null,
          expiresAt: null,
        };
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
        state.subscription = {
          plan: null,
          status: null,
          expiresAt: null,
        };
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.subscription = {
          plan: null,
          status: null,
          expiresAt: null,
        };
      })
      .addCase(verifyToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          id: action.payload.id,
          username: action.payload.username,
          email: action.payload.email,
          telegramHandle: action.payload.telegram_username,
          createdAt: action.payload.created_at,
        };
        state.subscription = {
          plan: action.payload.subscription_plan,
          status: action.payload.plan_status,
          expiresAt: action.payload.plan_expires_at,
        };
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(verifyToken.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.subscription = {
          plan: null,
          status: null,
          expiresAt: null,
        };
      })
      .addCase(editProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { ...state.user, ...action.payload.user };
        state.error = null;
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          id: action.payload.id,
          username: action.payload.username,
          email: action.payload.email || null,
          telegramHandle: action.payload.telegram_username || null,
          createdAt: action.payload.created_at || null,
        };
        state.token = action.payload.token;
        state.subscription = {
          plan: action.payload.subscription_plan || null,
          status: action.payload.plan_status || null,
          expiresAt: action.payload.plan_expires_at || null,
        };
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(resendOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resendOTP.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(resendOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(sendForgotPasswordOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendForgotPasswordOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = action.payload?.message || 'Reset code sent successfully';
      })
      .addCase(sendForgotPasswordOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyForgotPasswordOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyForgotPasswordOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = action.payload?.message || 'Code verified successfully';
      })
      .addCase(verifyForgotPasswordOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = action.payload?.message || 'Password reset successfully';
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(resendForgotPasswordOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resendForgotPasswordOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = action.payload?.message || 'Reset code resent successfully';
      })
      .addCase(resendForgotPasswordOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSnipeHistory.pending, (state) => {
        state.historyLoading = true;
        state.error = null;
      })
      .addCase(fetchSnipeHistory.fulfilled, (state, action) => {
        state.historyLoading = false;
        state.snipeHistory = action.payload.snipe_history || [];
        state.error = null;
      })
      .addCase(fetchSnipeHistory.rejected, (state, action) => {
        state.historyLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchSnipeAnalytics.pending, (state) => {
        state.analyticsLoading = true;
        state.error = null;
      })
      .addCase(fetchSnipeAnalytics.fulfilled, (state, action) => {
        state.analyticsLoading = false;
        state.snipeAnalytics = action.payload;
        state.error = null;
      })
      .addCase(fetchSnipeAnalytics.rejected, (state, action) => {
        state.analyticsLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearSuccess, resetAuth } = authSlice.actions;
export default authSlice.reducer; 