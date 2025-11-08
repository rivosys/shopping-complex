'use client';

import { useAppDispatch } from '@/lib/hooks/reduxHooks';
import { addToCart } from '@/features/cart/cartSlice';
import { CartItem } from '@/features/cart/types';
import { Product } from '@/features/products/types';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

interface RelatedProductsProps {
  cartItems: CartItem[];
}

export default function RelatedProducts({ cartItems }: RelatedProductsProps) {
  // Get unique categories from cart items
  const cartCategories = new Set(
    cartItems.map(item => 
      products.find(p => p.id === item.productId)?.category
    ).filter(Boolean)
  );

  // Get products from the same categories, excluding items already in cart
  const relatedProducts = products
    .filter(product => 
      cartCategories.has(product.category) && 
      !cartItems.some(item => item.productId === product.id)
    )
    .slice(0, 4); // Show max 4 related products

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}