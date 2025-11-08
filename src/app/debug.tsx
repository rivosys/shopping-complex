'use client';

import { useAppSelector } from '@/lib/hooks/reduxHooks';
import { selectCartItems, selectCartItemCount } from '@/features/cart/cartSlice';

export default function DebugCart() {
  const items = useAppSelector(selectCartItems);
  const count = useAppSelector(selectCartItemCount);

  console.log('Cart Debug:', { items, count });

  return null;
}