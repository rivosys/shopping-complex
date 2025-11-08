import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from './types';

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startAuth: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    authSuccess: (state, action: PayloadAction<User>) => {
      state.status = 'authenticated';
      state.user = action.payload;
      state.error = null;
    },
    authFailure: (state, action: PayloadAction<string>) => {
      state.status = 'error';
      state.user = null;
      state.error = action.payload;
    },
    clearAuth: (state) => {
      state.user = null;
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const { startAuth, authSuccess, authFailure, clearAuth } = authSlice.actions;
export default authSlice.reducer;