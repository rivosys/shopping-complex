'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { FiMenu, FiShoppingCart, FiUser, FiHeart, FiSearch, FiLogOut } from 'react-icons/fi';
import { useRouter, useSearchParams } from 'next/navigation';
import { categories } from '@/data/categories';
import { useAppSelector } from '@/lib/hooks/reduxHooks';
import { useSession, signOut } from 'next-auth/react';
import { toast } from 'react-toastify';

const menuCategories = [
  { id: "all", name: "All Categories" },
  ...categories.slice(0, 5)
];

export default function Navbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParams?.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams?.get('category') || 'all');
  const [mounted, setMounted] = useState(false);
  
  // Get cart total items from Redux store
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = useMemo(() => 
    cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Keep state in sync with URL parameters only on initial load
  useEffect(() => {
    if (mounted) return; // Only run on initial mount
    const category = searchParams?.get('category');
    const search = searchParams?.get('search');
    setSelectedCategory(category || 'all');
    setSearchQuery(search || '');
  }, [searchParams, mounted]);

  // Memoize the navigation function to prevent unnecessary rerenders
  const navigate = useCallback((params: URLSearchParams) => {
    const queryString = params.toString();
    router.push(`/products${queryString ? `?${queryString}` : ''}`);
  }, [router]);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    // Build the query object
    const queryParams: Record<string, string> = {};
    
    // Add search parameter if not empty
    if (searchQuery.trim()) {
      queryParams.search = searchQuery.trim();
    }

    // Add category parameter if not 'all'
    if (selectedCategory !== 'all') {
      queryParams.category = selectedCategory;
    }

    // Create the query string
    const queryString = new URLSearchParams(queryParams).toString();
    
    // Navigate using Next.js router
    router.push(`/products${queryString ? `?${queryString}` : ''}`);
  }, [searchQuery, selectedCategory, router]);

  const handleCategoryChange = useCallback((newCategory: string) => {
    setSelectedCategory(newCategory);
    const params = new URLSearchParams(searchParams?.toString() || '');
    if (newCategory === 'all') {
      params.delete('category');
    } else {
      params.set('category', newCategory);
    }
    navigate(params);
  }, [searchParams, navigate]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-xl font-bold">
                Shopping Complex
              </Link>
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  <span>📍</span>
                  <div>
                    <p className="text-xs text-gray-300">Deliver to</p>
                    <p className="text-sm font-medium">Select Location</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-3xl mx-4 hidden md:block">
              {mounted ? (
                <form onSubmit={handleSearch} className="relative flex gap-2">
                  <div className="w-40 shrink-0">
                    <select
                      value={selectedCategory}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                      className="w-full h-full px-3 py-2 rounded-lg border-2 border-orange-500 focus:outline-none focus:border-orange-600 bg-white text-gray-900"
                      suppressHydrationWarning
                    >
                      <option value="all">All Categories</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      defaultValue={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleSearch(e as any);
                        }
                      }}
                      placeholder="Search for products, brands, or categories..."
                      className="w-full px-4 py-2 rounded-lg border-2 border-orange-500 focus:outline-none focus:border-orange-600 bg-white text-gray-900 placeholder-gray-500 text-gray-900"
                      suppressHydrationWarning
                    />
                    <button 
                      type="submit"
                      className="absolute right-0 top-0 h-full px-6 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-colors"
                    >
                      <FiSearch className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="relative flex gap-2">
                  <div className="w-40 px-4 py-2 rounded-lg border-2 border-orange-500 bg-gray-100" />
                  <div className="flex-1 relative">
                    <div className="w-full px-4 py-2 rounded-lg border-2 border-orange-500 bg-gray-100" />
                    <div className="absolute right-0 top-0 h-full w-[56px] bg-orange-500 rounded-r-lg" />
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-6">
              {session ? (
                <div className="hidden sm:flex items-center space-x-4">
                  <div className="flex items-center space-x-1 group">
                    <FiUser className="w-5 h-5 text-orange-500" />
                    <div className="text-sm">
                      <p className="text-xs text-gray-300">Welcome</p>
                      <p className="font-medium truncate max-w-[100px]">{session.user?.name || session.user?.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      signOut();
                      toast.success('Signed out successfully');
                    }}
                    className="flex items-center space-x-1 group hover:text-orange-500 transition-colors"
                  >
                    <FiLogOut className="w-5 h-5" />
                    <span className="text-sm font-medium">Sign Out</span>
                  </button>
                </div>
              ) : (
                <Link href="/login" className="hidden sm:flex items-center space-x-1 group">
                  <FiUser className="w-5 h-5 group-hover:text-orange-500 transition-colors" />
                  <div className="text-sm">
                    <p className="text-xs text-gray-300">Sign in</p>
                    <p className="font-medium">Account</p>
                  </div>
                </Link>
              )}
              <Link href="/wishlist" className="hidden sm:block">
                <FiHeart className="w-6 h-6 hover:text-orange-500 transition-colors" />
              </Link>
              <Link href="/cart" className="relative group">
                <FiShoppingCart className="w-6 h-6 group-hover:text-orange-500 transition-colors" />
                {mounted && totalItems > 0 && (
                  <span 
                    className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs min-w-[20px] h-5 rounded-full flex items-center justify-center font-medium"
                    suppressHydrationWarning
                  >
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-12">
            {mounted ? (
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 hover:text-orange-500 transition-colors"
              >
                <FiMenu className="w-6 h-6" />
                <span className="font-medium">All</span>
              </button>
            ) : (
              <div className="flex items-center space-x-2 text-gray-400">
                <FiMenu className="w-6 h-6" />
                <span className="font-medium">All</span>
              </div>
            )}

            <div className="hidden md:flex items-center space-x-8 ml-8">
              {menuCategories.map((category) => (
                <Link
                  key={category.id}
                  href={category.id === 'all' ? '/products' : `/products?category=${category.id}`}
                  className="text-gray-700 hover:text-orange-500 transition-colors text-sm font-medium"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            <div className="ml-auto hidden sm:block">
              <Link
                href="/deals"
                className="text-orange-500 hover:text-orange-600 transition-colors font-medium"
              >
                Special Offers
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search (visible on small screens) */}
      <div className="md:hidden p-4 bg-gray-800">
        {mounted ? (
          <form onSubmit={handleSearch} className="flex flex-col gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border-2 border-orange-500 focus:outline-none focus:border-orange-600 bg-white text-gray-900"
              suppressHydrationWarning
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
            <div className="relative">
                <input
                type="text"
                defaultValue={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSearch(e as any);
                  }
                }}
                placeholder="Search for products, brands, or categories..."
                className="w-full px-4 py-2 rounded-lg border-2 border-orange-500 focus:outline-none focus:border-orange-600 bg-white text-gray-900 placeholder-gray-500"
                suppressHydrationWarning
              />
              <button 
                type="submit"
                className="absolute right-0 top-0 h-full px-6 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-colors"
              >
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="w-full px-4 py-2 rounded-lg border-2 border-orange-500 bg-gray-100" />
            <div className="relative">
              <div className="w-full px-4 py-2 rounded-lg border-2 border-orange-500 bg-gray-100" />
              <div className="absolute right-0 top-0 h-full w-[56px] bg-orange-500 rounded-r-lg" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t md:hidden"
          >
            <div className="py-2">
              {menuCategories.map((category) => (
                <Link
                  key={category.id}
                  href={category.id === 'all' ? '/products' : `/products?category=${category.id}`}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-500 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}