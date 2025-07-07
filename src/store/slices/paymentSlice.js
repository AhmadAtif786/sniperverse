import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const createSubscription = createAsyncThunk(
  'payment/createSubscription',
  async (paymentData, { rejectWithValue }) => {
      try {
        const transformedData = {
          plan: paymentData.plan,
          price: parseFloat(paymentData.price.replace(/[£$€¥,]/g, '')), 
          wallet_address: paymentData.walletAddress, 
          wallet_type: paymentData.walletType, 
          user_id: paymentData.userId 
        };
        

        
      const response = await fetch(`${API_BASE_URL}/api/v1/payments/create-subscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(transformedData)
      });

      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data.message || 'Payment initiation failed');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

export const confirmPayment = createAsyncThunk(
  'payment/confirmPayment',
  async (confirmData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/payments/confirm-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(confirmData)
      });

      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data.message || 'Payment confirmation failed');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network error');
    }
  }
);

const initialState = {
  isProcessing: false,
  transaction: null,
  transactionId: null,
  error: null,
  success: false,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    clearPaymentState: (state) => {
      state.isProcessing = false;
      state.transaction = null;
      state.transactionId = null;
      state.error = null;
      state.success = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSubscription.pending, (state) => {
        state.isProcessing = true;
        state.error = null;
      })
      .addCase(createSubscription.fulfilled, (state, action) => {
        state.isProcessing = false;
        state.transaction = action.payload.transaction;
        state.transactionId = action.payload.transactionId;
        state.error = null;
      })
      .addCase(createSubscription.rejected, (state, action) => {
        state.isProcessing = false;
        state.error = action.payload;
      })
      .addCase(confirmPayment.pending, (state) => {
        state.isProcessing = true;
        state.error = null;
      })
      .addCase(confirmPayment.fulfilled, (state) => {
        state.isProcessing = false;
        state.success = true;
        state.error = null;
      })
      .addCase(confirmPayment.rejected, (state, action) => {
        state.isProcessing = false;
        state.error = action.payload;
      });
  },
});

export const { clearPaymentState, clearError } = paymentSlice.actions;
export default paymentSlice.reducer; 