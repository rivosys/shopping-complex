'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import CartIcon from '../cart/CartIcon';
import CartDrawer from '../cart/CartDrawer';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Shopping Complex
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Home
            </Link>
            <Link
              href="/shop/Electronics"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Electronics
            </Link>
            <Link
              href="/shop/Fashion"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Fashion
            </Link>
            <Link
              href="/shop/Gaming"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Gaming
            </Link>
            <Link
              href="/shop/Sports"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Sports
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/wishlist" className="text-gray-600 hover:text-gray-900">
              <Heart className="w-6 h-6" />
            </Link>
            <CartDrawer />
            <Link
              href="/(auth)/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}