'use client';

import { useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, CartItem } from '@/types';
import { products } from '@/data/products';
import Button from '@/components/ui/Button';
import { useAppDispatch } from '@/lib/hooks/reduxHooks';
import { addItem } from '@/store/features/cartSlice';

interface RelatedProductsProps {
  cartItems: CartItem[];
}

export default function RelatedProducts({ cartItems }: RelatedProductsProps) {
  const dispatch = useAppDispatch();

  const getRelatedProducts = useCallback((cartItems: CartItem[]) => {
    // Get categories and types of items in cart
    const cartProducts = cartItems.map(item => 
      products.find(p => p.id === item.productId)
    ).filter(Boolean) as Product[];

    const cartCategories = new Set(cartProducts.map(item => item.category));
    
    // Find products in the same categories, but not in cart
    const cartProductIds = new Set(cartItems.map(item => item.productId));
    const relatedProducts = products.filter(product => 
      !cartProductIds.has(product.id) && 
      cartCategories.has(product.category)
    );

    // Return up to 4 random related products
    return relatedProducts
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }, []);

  const relatedProducts = useMemo(() => 
    getRelatedProducts(cartItems),
    [cartItems, getRelatedProducts]
  );

  const handleAddToCart = (product: Product) => {
    dispatch(addItem({ productId: product.id, quantity: 1 }));
  };

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <Link href={`/products/${product.id}`}>
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </Link>
            <div className="p-4">
              <Link href={`/products/${product.id}`} className="hover:text-primary">
                <h3 className="font-medium mb-2 truncate">{product.name}</h3>
              </Link>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                <Button
                  onClick={() => handleAddToCart(product)}
                  size="sm"
                  variant="primary"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}