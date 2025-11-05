export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

export const categories: Category[] = [
  // Original Categories
  {
    id: 'c1',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Latest gadgets and electronic devices',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&q=80'
  },
  {
    id: 'c2',
    name: 'Fashion',
    slug: 'fashion',
    description: 'Trending fashion items and accessories',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&q=80'
  },
  {
    id: 'c3',
    name: 'Home & Living',
    slug: 'home-living',
    description: 'Furniture and home decoration items',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&q=80'
  },
  {
    id: 'c4',
    name: 'Books',
    slug: 'books',
    description: 'Books across all genres',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&q=80'
  },
  {
    id: 'c5',
    name: 'Beauty & Personal Care',
    slug: 'beauty-personal-care',
    description: 'Skincare, haircare, and personal grooming products',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80'
  },
  {
    id: 'c6',
    name: 'Sports',
    slug: 'sports',
    description: 'Sports equipment and fitness gear',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&q=80'
  },
  {
    id: 'c7',
    name: 'Gaming',
    slug: 'gaming',
    description: 'Gaming consoles, accessories, and gear',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&q=80'
  },
  {
    id: 'c8',
    name: 'Jewelry & Watches',
    slug: 'jewelry-watches',
    description: 'Fine jewelry, luxury watches, and accessories',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80'
  },
  {
    id: 'c9',
    name: 'Art & Crafts',
    slug: 'art-crafts',
    description: 'Art supplies, crafting materials, and DIY kits',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80'
  },
  {
    id: 'c10',
    name: 'Health & Wellness',
    slug: 'health-wellness',
    description: 'Vitamins, supplements, and wellness products',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500&q=80'
  },
  {
    id: 'c11',
    name: 'Automotive',
    slug: 'automotive',
    description: 'Car accessories and maintenance products',
    image: 'https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=500&q=80'
  },
  {
    id: 'c12',
    name: 'Music & Instruments',
    slug: 'music-instruments',
    description: 'Musical instruments and accessories',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&q=80'
  },
  {
    id: 'c13',
    name: 'Travel & Luggage',
    slug: 'travel-luggage',
    description: 'Travel gear, bags, and accessories',
    image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500&q=80'
  },
  {
    id: 'c14',
    name: 'Smart Home',
    slug: 'smart-home',
    description: 'Smart home devices and automation products',
    image: 'https://images.unsplash.com/photo-1558002038-76a31d8f2f70?w=500&q=80'
  },
  {
    id: 'c15',
    name: 'Camera & Photo',
    slug: 'camera-photo',
    description: 'Photography equipment and accessories',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80'
  },
  {
    id: 'c16',
    name: 'Party & Events',
    slug: 'party-events',
    description: 'Party supplies and event decorations',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&q=80'
  },
  {
    id: 'c17',
    name: 'Industrial & Tools',
    slug: 'industrial-tools',
    description: 'Professional tools and industrial equipment',
    image: 'https://images.unsplash.com/photo-1581147036324-c1c9bf853b94?w=500&q=80'
  }
];