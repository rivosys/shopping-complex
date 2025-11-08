'use client';

'use client';

import { useMemo, useCallback } from 'react';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';
import { useAppDispatch } from '@/lib/hooks/reduxHooks';
import { addToCart } from '@/features/cart/cartSlice';
import Select from '@/components/ui/Select';
import Input from '@/components/ui/Input';
import { useSearchParams } from 'next/navigation';
import { searchIndex, categoryMap } from '@/lib/search';

export default function ProductsPage() {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  


  // Memoize the search and category parameters
  const categoryParam = useMemo(() => searchParams?.get('category'), [searchParams]);
  const searchParam = useMemo(() => searchParams?.get('search')?.toLowerCase(), [searchParams]);

  // Fast category lookup using pre-processed map
  const selectedCatName = useMemo(() => 
    categoryParam === 'all' ? null : categoryMap.get(categoryParam || ''),
    [categoryParam]
  );

  // Optimized search function using pre-built index
  const matchesSearch = useCallback((productId: string): boolean => {
    if (!searchParam) return true;
    const indexedText = searchIndex.get(productId);
    return indexedText ? indexedText.includes(searchParam) : false;
  }, [searchParam]);

  // Optimized category matching
  const matchesCategory = useCallback((productCategory: string): boolean => {
    if (!categoryParam || categoryParam === 'all') return true;
    return productCategory === categoryParam || productCategory === selectedCatName;
  }, [categoryParam, selectedCatName]);

  // Optimized filtering with memoization
  const filteredProducts = useMemo(() => {
    if (!searchParam && (!categoryParam || categoryParam === 'all')) {
      return products; // Return all products if no filters
    }
    return products.filter(product => 
      matchesCategory(product.category) && matchesSearch(product.id)
    );
  }, [categoryParam, matchesCategory, matchesSearch]);

  return (
    <Layout>
      <div className="space-y-0">
        {/* <h1 className="text-3xl font-bold">Our Products</h1> */}

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* <div className="w-full sm:w-64">
            <Select
              label="Category"
              value={selectedCategory}
              onChange={(e) => {
                const newCategory = e.target.value;
                setSelectedCategory(newCategory);
                const params = new URLSearchParams(window.location.search);
                if (newCategory === 'all') {
                  params.delete('category');
                } else {
                  params.set('category', newCategory);
                }
                window.history.pushState({}, '', `?${params.toString()}`);
              }}
              options={[
                { value: 'all', label: 'All Categories' },
                ...categories.map(cat => ({
                  value: cat.id,
                  label: cat.name,
                }))
              ]}
            />
          </div> */}
          {/* <div className="flex-1">
            <Input
              label="Search Products"
              type="text"
              value={searchQuery}
              onChange={(e) => {
                const newSearch = e.target.value;
                setSearchQuery(newSearch);
                const params = new URLSearchParams(window.location.search);
                if (!newSearch) {
                  params.delete('search');
                } else {
                  params.set('search', newSearch);
                }
                window.history.pushState({}, '', `?${params.toString()}`);
              }}
              placeholder="Search by name or description..."
            />
          </div> */}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}