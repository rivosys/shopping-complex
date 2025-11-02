import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

import { storage } from '@/lib/localStorage';

const initialState: CartState = storage.get('CART', {
  items: [],
  isOpen: false,
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const existingItem = state.items.find(item => item.productId === action.payload.productId);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      storage.set('CART', state);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.productId !== action.payload);
      storage.set('CART', state);
    },
    updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const item = state.items.find(item => item.productId === action.payload.productId);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      storage.set('CART', state);
    },
    clearCart: (state) => {
      state.items = [];
      storage.remove('CART');
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    loadSavedCart: (state, action: PayloadAction<CartState>) => {
      // Load saved cart state from localStorage
      state.items = action.payload.items;
      state.isOpen = false; // Reset cart open state
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart, toggleCart, loadSavedCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemCount = (state: RootState) => 
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartIsOpen = (state: RootState) => state.cart.isOpen;

export default cartSlice.reducer;