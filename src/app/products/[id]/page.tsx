'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@/lib/hooks/reduxHooks';
import { addItem, toggleCart } from '@/store/features/cartSlice';
import Layout from '@/components/layout/Layout';
import { products } from '@/data/products';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const resolvedParams = use(params);

  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    if (quantity < 1) {
      toast.error('Please select a valid quantity');
      return;
    }
    if (product.stock < quantity) {
      toast.error('Not enough stock available!');
      return;
    }

    try {
      dispatch(addItem({ productId: product.id, quantity }));
      toast.success(`Added ${quantity} ${product.name} to cart!`);
      dispatch(toggleCart()); // Open the cart drawer
    } catch (error) {
      toast.error('Failed to add item to cart');
    }
  };

  return (
    <Layout>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            className="object-cover"
            priority
            fill
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-4">
              <span className="text-2xl font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </span>
              <Badge variant={product.stock > 0 ? 'success' : 'error'}>
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </Badge>
            </div>
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="flex items-center gap-4">
            <div className="w-24">
              <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <Button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex-1"
            >
              Add to Cart
            </Button>
          </div>

          {/* Product Details */}
          <div className="border-t pt-6 mt-6">
            <h2 className="text-xl font-bold mb-4">Product Details</h2>
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="font-medium text-gray-500">Category</dt>
                <dd className="mt-1">{product.category}</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Stock</dt>
                <dd className="mt-1">{product.stock} units</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-500">Rating</dt>
                <dd className="mt-1 flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  {product.rating}
                </dd>
              </div>
            </dl>
          </div>

          {/* Reviews Section */}
          <div className="border-t pt-6 mt-6">
            <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
            {product.reviews.length > 0 ? (
              <div className="space-y-4">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{review.userName}</span>
                      <span className="text-yellow-400">{'★'.repeat(review.rating)}</span>
                    </div>
                    <p className="mt-2 text-gray-600">{review.comment}</p>
                    <span className="text-sm text-gray-500">{review.createdAt}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products
            .filter(
              (p) => p.category === product.category && p.id !== product.id
            )
            .slice(0, 4)
            .map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover"
                  />
                  {relatedProduct.stock < 10 && (
                    <Badge variant="error" className="absolute top-2 right-2">
                      Low Stock
                    </Badge>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-gray-600">{relatedProduct.rating}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-blue-600 font-bold">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                    <span className="text-sm text-gray-500">
                      {relatedProduct.stock} in stock
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </Layout>
  );
}