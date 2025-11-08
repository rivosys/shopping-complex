import { products } from '@/data/products';
import { categories } from '@/data/categories';

// Create a search index for products
export const searchIndex = new Map(products.map(product => {
  const searchText = `${product.name.toLowerCase()} ${product.description.toLowerCase()}`;
  return [product.id, searchText];
}));

// Pre-process category mapping for faster lookups
export const categoryMap = new Map(categories.map(cat => [cat.id, cat.name]));