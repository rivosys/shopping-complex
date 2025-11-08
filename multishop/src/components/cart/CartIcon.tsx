'use client';

import { ShoppingCart } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/reduxHooks';
import { selectCartItemCount, toggleCart } from '@/features/cart/cartSlice';
import { useEffect, useState } from 'react';

export default function CartIcon() {
  const dispatch = useAppDispatch();
  const itemCount = useAppSelector(selectCartItemCount);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={() => dispatch(toggleCart())}
      className="relative p-2 text-gray-600 hover:text-gray-900"
      aria-label="Shopping cart"
    >
      <ShoppingCart className="w-6 h-6" />
      {mounted && itemCount > 0 && (
        <span 
          className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
          suppressHydrationWarning
        >
          {itemCount}
        </span>
      )}
    </button>
  );
}