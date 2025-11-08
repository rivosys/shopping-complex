import { Product, Category, Review } from './types';

// Simulate API response delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class ProductService {
  private static instance: ProductService;
  private products: Product[];
  private categories: Category[];

  private constructor() {
    // Initialize with empty arrays
    this.products = [];
    this.categories = [];
  }

  public static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  async getAllProducts(): Promise<Product[]> {
    await delay(500); // Simulate network delay
    return this.products;
  }

  async getProductById(id: string): Promise<Product | null> {
    await delay(300);
    return this.products.find(p => p.id === id) || null;
  }

  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    await delay(500);
    return this.products.filter(p => p.category === categoryId);
  }

  async getAllCategories(): Promise<Category[]> {
    await delay(300);
    return this.categories;
  }

  async getCategoryById(id: string): Promise<Category | null> {
    await delay(200);
    return this.categories.find(c => c.id === id) || null;
  }

  async addReview(productId: string, review: Omit<Review, 'id' | 'createdAt'>): Promise<Review> {
    await delay(500);
    const product = await this.getProductById(productId);
    if (!product) {
      throw new Error('Product not found');
    }

    const newReview: Review = {
      ...review,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
    };

    product.reviews.push(newReview);
    return newReview;
  }
}