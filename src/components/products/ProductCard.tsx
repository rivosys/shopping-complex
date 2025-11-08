'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import { useAppDispatch } from '@/lib/hooks/reduxHooks';
import { addToCart, toggleCart } from '@/features/cart/cartSlice';
import { toast } from 'react-toastify';
import Badge from '@/components/ui/Badge';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  stock: number;
  reviews: any[];
}

export default function ProductCard({ id, name, description, price, image, rating, stock, reviews }: ProductCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product details
    if (stock < 1) {
      toast.error('Product is out of stock');
      return;
    }

    try {
      dispatch(addToCart({ productId: id, quantity: 1 }));
      toast.success(`Added ${name} to cart!`);
      dispatch(toggleCart());
    } catch (error) {
      toast.error('Failed to add item to cart');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/products/${id}`} className="group">
        <div className="relative h-48">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {stock < 10 && (
            <Badge variant="error" className="absolute top-2 right-2">
              Low Stock
            </Badge>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {rating} ({reviews.length} reviews)
            </span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-blue-600 font-bold">${price.toFixed(2)}</p>
            <button
              onClick={handleAddToCart}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              title="Add to Cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}