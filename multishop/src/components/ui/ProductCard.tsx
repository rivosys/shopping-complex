'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { useAppDispatch } from '@/lib/hooks/reduxHooks';
import { addItem, toggleCart } from '@/store/features/cartSlice';
import { toast } from 'react-toastify';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    e.stopPropagation(); // Stop event bubbling
    
    if (product.stock < 1) {
      toast.error('Product is out of stock');
      return;
    }

    try {
      dispatch(addItem({ productId: product.id, quantity: 1 }));
      toast.success(`Added ${product.name} to cart!`);
      dispatch(toggleCart());
    } catch (error) {
      toast.error('Failed to add item to cart');
    }
  };

  return (
    <div className="group relative rounded-lg border p-4 transition-all hover:shadow-lg">
      <div className="aspect-square relative overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        <Button
          onClick={handleAddToCart}
          className="w-full"
          variant="primary"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;