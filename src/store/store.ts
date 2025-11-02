import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/store/features/cartSlice';
import authReducer from '@/store/features/authSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;