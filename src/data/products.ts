import { Product } from '../types';

export const products: Product[] = [
  // Jewelry & Watches
  {
    id: '51',
    name: 'Diamond Engagement Ring',
    description: 'Elegant 1-carat diamond solitaire ring in 18K white gold setting. Features excellent cut clarity and comes with certification. Perfect for that special moment.',
    price: 2999.99,
    category: 'c8',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80',
    stock: 10,
    rating: 4.9,
    reviews: []
  },
  {
    id: '52',
    name: 'Luxury Automatic Watch',
    description: 'Swiss-made automatic movement watch with sapphire crystal glass, genuine leather strap, and water resistance up to 100m. Perfect blend of classic design and modern technology.',
    price: 1499.99,
    category: 'Jewelry & Watches',
    image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=500&q=80',
    stock: 15,
    rating: 4.8,
    reviews: []
  },
  {
    id: '53',
    name: 'Pearl Necklace Set',
    description: 'Genuine freshwater pearl necklace and earring set. Features hand-picked AAA grade pearls with sterling silver clasps. Includes elegant gift box.',
    price: 299.99,
    category: 'Jewelry & Watches',
    image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=500&q=80',
    stock: 20,
    rating: 4.7,
    reviews: []
  },
  {
    id: '54',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking watch with heart rate monitor, sleep tracking, and 20+ sport modes. Features a vibrant AMOLED display and 7-day battery life.',
    price: 199.99,
    category: 'Jewelry & Watches',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80',
    stock: 50,
    rating: 4.6,
    reviews: []
  },
  {
    id: '55',
    name: 'Gold Chain Bracelet',
    description: '18K gold-plated chain bracelet with adjustable length. Hypoallergenic and tarnish-resistant. Perfect for daily wear or special occasions.',
    price: 89.99,
    category: 'Jewelry & Watches',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80',
    stock: 30,
    rating: 4.5,
    reviews: []
  },
  {
    id: '56',
    name: 'Vintage Pocket Watch',
    description: 'Handcrafted vintage-style pocket watch with intricate engravings. Features mechanical movement and comes with a matching chain. Perfect collectible piece.',
    price: 159.99,
    category: 'Jewelry & Watches',
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=500&q=80',
    stock: 15,
    rating: 4.8,
    reviews: []
  },
  {
    id: '57',
    name: 'Gemstone Earrings',
    description: 'Sterling silver earrings featuring natural gemstones. Choose from amethyst, topaz, or sapphire. Includes elegant presentation box.',
    price: 129.99,
    category: 'Jewelry & Watches',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80',
    stock: 25,
    rating: 4.7,
    reviews: []
  },
  {
    id: '58',
    name: 'Minimalist Watch',
    description: 'Sleek and modern minimalist watch with mesh steel band. Features Japanese quartz movement and ultra-thin case design. Water-resistant up to 30m.',
    price: 149.99,
    category: 'Jewelry & Watches',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80',
    stock: 40,
    rating: 4.6,
    reviews: []
  },
  {
    id: '59',
    name: 'Silver Anklet',
    description: 'Sterling silver anklet with delicate charm details. Adjustable length and durable clasp. Perfect for beach days and summer fashion.',
    price: 49.99,
    category: 'Jewelry & Watches',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&q=80',
    stock: 35,
    rating: 4.5,
    reviews: []
  },
  {
    id: '60',
    name: 'Couples Watch Set',
    description: 'Matching his and hers watch set with premium leather straps. Features Swiss quartz movement and date display. Comes in a luxury gift box.',
    price: 299.99,
    category: 'Jewelry & Watches',
    image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&q=80',
    stock: 20,
    rating: 4.8,
    reviews: []
  },
  // Home & Living
  {
    id: '21',
    name: 'Smart LED Bulb Set',
    description: 'WiFi-enabled LED bulbs with color changing capabilities',
    price: 49.99,
    category: 'c3',
    image: 'https://images.unsplash.com/photo-1553451133-8083c47243d6?w=500&q=80',
    stock: 100,
    rating: 4.6,
    reviews: []
  },
  {
    id: '22',
    name: 'Modern Coffee Table',
    description: 'Contemporary design coffee table with storage',
    price: 299.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=500&q=80',
    stock: 15,
    rating: 4.7,
    reviews: []
  },
  {
    id: '23',
    name: 'Robot Vacuum Cleaner',
    description: 'Smart robot vacuum with mapping technology',
    price: 399.99,
    category: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500&q=80',
    stock: 30,
    rating: 4.8,
    reviews: []
  },

  // Books
  {
    id: '24',
    name: 'The Art of Programming',
    description: 'Comprehensive guide to modern programming practices',
    price: 39.99,
    category: 'c4',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80',
    stock: 50,
    rating: 4.9,
    reviews: []
  },
  {
    id: '25',
    name: 'Business Leadership',
    description: 'Best-selling book on modern leadership principles',
    price: 24.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80',
    stock: 75,
    rating: 4.7,
    reviews: []
  },
  {
    id: '26',
    name: 'Healthy Living Cookbook',
    description: 'Collection of nutritious and delicious recipes',
    price: 29.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80',
    stock: 60,
    rating: 4.8,
    reviews: []
  },

  // Beauty & Personal Care
  {
    id: '27',
    name: 'Premium Skincare Set',
    description: 'Complete skincare routine with natural ingredients',
    price: 89.99,
    category: 'c5',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&q=80',
    stock: 40,
    rating: 4.8,
    reviews: []
  },
  {
    id: '28',
    name: 'Hair Care Bundle',
    description: 'Professional grade shampoo and conditioner set',
    price: 59.99,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80',
    stock: 55,
    rating: 4.6,
    reviews: []
  },
  {
    id: '29',
    name: 'Electric Toothbrush',
    description: 'Smart electric toothbrush with multiple modes',
    price: 129.99,
    category: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1559741033-d85618ce7e8c?w=500&q=80',
    stock: 45,
    rating: 4.7,
    reviews: []
  },

  // Additional Electronics
  {
    id: '30',
    name: 'Drone with 4K Camera',
    description: 'Professional drone with stabilized 4K camera',
    price: 799.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500&q=80',
    stock: 20,
    rating: 4.9,
    reviews: []
  },
  {
    id: '31',
    name: 'Portable Power Bank',
    description: '20000mAh power bank with fast charging',
    price: 49.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&q=80',
    stock: 100,
    rating: 4.5,
    reviews: []
  },

  // Additional Fashion
  {
    id: '32',
    name: 'Designer Watch',
    description: 'Luxury automatic watch with leather strap',
    price: 499.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80',
    stock: 15,
    rating: 4.9,
    reviews: []
  },
  {
    id: '33',
    name: 'Premium Backpack',
    description: 'Water-resistant laptop backpack with USB charging',
    price: 79.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    stock: 40,
    rating: 4.7,
    reviews: []
  },

  // Additional Sports
  {
    id: '34',
    name: 'Smart Jump Rope',
    description: 'Digital jump rope with workout tracking',
    price: 39.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&q=80',
    stock: 65,
    rating: 4.5,
    reviews: []
  },
  {
    id: '35',
    name: 'Adjustable Dumbbells',
    description: 'Space-saving adjustable dumbbell set',
    price: 299.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&q=80',
    stock: 25,
    rating: 4.8,
    reviews: []
  },
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with active noise cancellation, 40-hour battery life, and premium audio drivers. Features touch controls and voice assistant support.',
    price: 199.99,
    category: 'c1',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    stock: 50,
    rating: 4.5,
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'John Doe',
        rating: 5,
        comment: 'Excellent sound quality!',
        createdAt: '2023-10-15'
      }
    ]
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and 20+ workout modes. Features sleep tracking and 7-day battery life. Water-resistant up to 50m.',
    price: 149.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    stock: 30,
    rating: 4.3,
    reviews: []
  },
  {
    id: '3',
    name: 'Classic Leather Jacket',
    description: 'Genuine leather jacket with modern design',
    price: 299.99,
    category: 'c2',
    image: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=500&q=80',
    stock: 20,
    rating: 4.7,
    reviews: []
  },
  {
    id: '4',
    name: 'Gaming Laptop',
    description: 'High-performance gaming laptop with NVIDIA RTX graphics, 16GB RAM, and 1TB SSD. Features 144Hz display and customizable RGB keyboard. Perfect for modern gaming.',
    price: 1299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',
    stock: 15,
    rating: 4.8,
    reviews: []
  },
  {
    id: '5',
    name: 'Designer Handbag',
    description: 'Luxury leather handbag with gold-plated hardware',
    price: 599.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80',
    stock: 10,
    rating: 4.9,
    reviews: []
  },
  {
    id: '6',
    name: 'Yoga Mat',
    description: 'Premium non-slip yoga mat with carrying strap',
    price: 49.99,
    category: 'c6',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80',
    stock: 100,
    rating: 4.6,
    reviews: []
  },
  {
    id: '7',
    name: '4K Smart TV',
    description: '65-inch 4K Ultra HD Smart LED TV with HDR10+, built-in voice assistant, and premium sound system. Features HDMI 2.1 and gaming mode for next-gen consoles.',
    price: 899.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80',
    stock: 25,
    rating: 4.7,
    reviews: []
  },
  {
    id: '8',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with superior cushioning',
    price: 129.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    stock: 45,
    rating: 4.4,
    reviews: []
  },
  {
    id: '9',
    name: 'Mechanical Keyboard',
    description: 'RGB mechanical gaming keyboard with custom switches',
    price: 159.99,
    category: 'c7',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&q=80',
    stock: 35,
    rating: 4.8,
    reviews: []
  },
  {
    id: '10',
    name: 'Winter Coat',
    description: 'Warm winter coat with faux fur hood',
    price: 199.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&q=80',
    stock: 30,
    rating: 4.5,
    reviews: []
  },
  {
    id: '11',
    name: 'Gaming Mouse',
    description: 'High-precision gaming mouse with adjustable DPI',
    price: 79.99,
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
    stock: 40,
    rating: 4.6,
    reviews: []
  },
  {
    id: '12',
    name: 'Basketball',
    description: 'Official size indoor/outdoor basketball',
    price: 29.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?w=500&q=80',
    stock: 75,
    rating: 4.3,
    reviews: []
  },
  {
    id: '13',
    name: 'Wireless Earbuds',
    description: 'True wireless earbuds with active noise cancellation',
    price: 179.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80',
    stock: 55,
    rating: 4.7,
    reviews: []
  },
  {
    id: '14',
    name: 'Gaming Console',
    description: 'Next-gen gaming console with 4K graphics',
    price: 499.99,
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&q=80',
    stock: 20,
    rating: 4.9,
    reviews: []
  },
  {
    id: '15',
    name: 'Denim Jeans',
    description: 'Classic fit denim jeans with stretch comfort',
    price: 89.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80',
    stock: 60,
    rating: 4.4,
    reviews: []
  },
  {
    id: '16',
    name: 'Smart Speaker',
    description: 'Voice-controlled smart speaker with premium sound',
    price: 129.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&q=80',
    stock: 40,
    rating: 4.5,
    reviews: []
  },
  {
    id: '17',
    name: 'Tennis Racket',
    description: 'Professional grade tennis racket with case',
    price: 159.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?w=500&q=80',
    stock: 25,
    rating: 4.6,
    reviews: []
  },
  {
    id: '18',
    name: 'Gaming Chair',
    description: 'Ergonomic gaming chair with lumbar support',
    price: 249.99,
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&q=80',
    stock: 30,
    rating: 4.7,
    reviews: []
  },
  {
    id: '19',
    name: 'Smartwatch Pro',
    description: 'Advanced smartwatch with health monitoring',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80',
    stock: 35,
    rating: 4.8,
    reviews: []
  },
  {
    id: '20',
    name: 'Designer Sunglasses',
    description: 'Polarized designer sunglasses with UV protection. Features premium Italian frames and polarized lenses for ultimate eye protection and style.',
    price: 159.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=500&q=80',
    stock: 45,
    rating: 4.5,
    reviews: []
  },

  // Health & Wellness
  {
    id: '71',
    name: 'Premium Yoga Set',
    description: 'Complete yoga set including eco-friendly mat, blocks, strap, and carrying bag. Features non-slip surface and perfect thickness for joint protection.',
    price: 79.99,
    category: 'c10',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80',
    stock: 45,
    rating: 4.8,
    reviews: []
  },
  {
    id: '72',
    name: 'Meditation Cushion Set',
    description: 'Ergonomic meditation cushion set with bolster pillow. Made from organic materials with removable, washable covers.',
    price: 59.99,
    category: 'Health & Wellness',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500&q=80',
    stock: 30,
    rating: 4.6,
    reviews: []
  },
  {
    id: '73',
    name: 'Digital Body Scale',
    description: 'Smart body composition scale measuring weight, BMI, muscle mass, and more. Syncs with fitness apps and supports multiple users.',
    price: 49.99,
    category: 'Health & Wellness',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&q=80',
    stock: 50,
    rating: 4.7,
    reviews: []
  },
  {
    id: '74',
    name: 'Aromatherapy Diffuser',
    description: 'Ultra-quiet aromatherapy diffuser with LED mood lighting and timer settings. Includes set of essential oils for relaxation and wellness.',
    price: 39.99,
    category: 'Health & Wellness',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&q=80',
    stock: 60,
    rating: 4.5,
    reviews: []
  },
  {
    id: '75',
    name: 'Vitamin Organizer',
    description: 'Weekly vitamin and supplement organizer with AM/PM compartments. Features smart reminder system and mobile app integration.',
    price: 24.99,
    category: 'Health & Wellness',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&q=80',
    stock: 75,
    rating: 4.4,
    reviews: []
  },
  {
    id: '76',
    name: 'Massage Gun',
    description: 'Professional-grade percussion massage device with 6 attachments and 20 speed levels. Perfect for muscle recovery and pain relief.',
    price: 149.99,
    category: 'Health & Wellness',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500&q=80',
    stock: 35,
    rating: 4.9,
    reviews: []
  },
  {
    id: '77',
    name: 'Sleep Aid Device',
    description: 'Advanced sleep aid device with white noise, guided meditation, and sleep tracking. Features smart alarm and companion app.',
    price: 89.99,
    category: 'Health & Wellness',
    image: 'https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=500&q=80',
    stock: 40,
    rating: 4.7,
    reviews: []
  },
  {
    id: '78',
    name: 'Acupressure Mat Set',
    description: 'Complete acupressure mat and pillow set for natural pain relief and relaxation. Includes carry bag and usage guide.',
    price: 45.99,
    category: 'Health & Wellness',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80',
    stock: 55,
    rating: 4.6,
    reviews: []
  },
  {
    id: '79',
    name: 'Air Purifier',
    description: 'HEPA air purifier with activated carbon filter and air quality monitor. Perfect for allergies and creating a healthier home environment.',
    price: 199.99,
    category: 'Health & Wellness',
    image: 'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=500&q=80',
    stock: 25,
    rating: 4.8,
    reviews: []
  },
  {
    id: '80',
    name: 'Wellness Tea Set',
    description: 'Organic wellness tea collection with glass teapot and infuser. Includes 6 varieties of herbal teas for different health benefits.',
    price: 69.99,
    category: 'Health & Wellness',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&q=80',
    stock: 45,
    rating: 4.7,
    reviews: []
  },

  // Automotive
  {
    id: '81',
    name: 'Car Diagnostic Scanner',
    description: 'Professional OBD2 car diagnostic scanner compatible with all vehicles post-1996. Features real-time monitoring and smartphone connectivity.',
    price: 89.99,
    category: 'c11',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=500&q=80',
    stock: 40,
    rating: 4.7,
    reviews: []
  },
  {
    id: '82',
    name: 'Dash Camera',
    description: '4K dual dash cam with front and rear recording, night vision, and GPS tracking. Includes parking mode and emergency recording.',
    price: 159.99,
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=500&q=80',
    stock: 30,
    rating: 4.8,
    reviews: []
  },
  {
    id: '83',
    name: 'Car Vacuum Cleaner',
    description: 'Powerful handheld car vacuum with LED light and multiple attachments. Features wet/dry cleaning capabilities and long power cord.',
    price: 49.99,
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?w=500&q=80',
    stock: 55,
    rating: 4.5,
    reviews: []
  },
  {
    id: '84',
    name: 'Tire Pressure Monitor',
    description: 'Wireless tire pressure monitoring system with real-time alerts. Compatible with most vehicles and easy to install.',
    price: 79.99,
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1580974928064-f0aeef70895a?w=500&q=80',
    stock: 45,
    rating: 4.6,
    reviews: []
  },
  {
    id: '85',
    name: 'Car Jump Starter',
    description: 'Portable jump starter and power bank with LED light and USB ports. Capable of starting vehicles up to 6.0L gas or 3.0L diesel.',
    price: 129.99,
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80',
    stock: 35,
    rating: 4.9,
    reviews: []
  },
  {
    id: '86',
    name: 'Car Phone Mount',
    description: 'Universal car phone mount with wireless charging capability. Features adjustable viewing angles and secure grip system.',
    price: 34.99,
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1592898741947-bc9570c9f5bf?w=500&q=80',
    stock: 70,
    rating: 4.4,
    reviews: []
  },
  {
    id: '87',
    name: 'Car Cleaning Kit',
    description: 'Complete car cleaning kit with premium microfiber cloths, brushes, and cleaning solutions. Includes interior and exterior care products.',
    price: 69.99,
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?w=500&q=80',
    stock: 50,
    rating: 4.7,
    reviews: []
  },
  {
    id: '88',
    name: 'Bluetooth Car Adapter',
    description: 'Wireless Bluetooth adapter for car audio systems. Enables hands-free calling and music streaming in any vehicle.',
    price: 29.99,
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1581781870027-04212e231e96?w=500&q=80',
    stock: 80,
    rating: 4.5,
    reviews: []
  },
  {
    id: '89',
    name: 'Car Cover',
    description: 'All-weather car cover with soft fleece lining. Features reinforced seams and secure straps. Available in multiple sizes.',
    price: 59.99,
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?w=500&q=80',
    stock: 40,
    rating: 4.6,
    reviews: []
  },
  {
    id: '90',
    name: 'Car Air Purifier',
    description: 'Advanced car air purifier with HEPA filter and ionizer. Features USB charging and real-time air quality monitoring.',
    price: 89.99,
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1572635148687-307f8ca9b737?w=500&q=80',
    stock: 45,
    rating: 4.8,
    reviews: []
  },

  // Music & Instruments
  {
    id: '91',
    name: 'Electric Guitar Kit',
    description: 'Complete electric guitar starter kit with amplifier, tuner, strings, and instructional guide. Perfect for beginners.',
    price: 299.99,
    category: 'c12',
    image: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?w=500&q=80',
    stock: 25,
    rating: 4.7,
    reviews: []
  },
  {
    id: '92',
    name: 'Digital Piano',
    description: 'Professional 88-key weighted digital piano with multiple sound options and recording capability.',
    price: 699.99,
    category: 'c12',
    image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?w=500&q=80',
    stock: 15,
    rating: 4.8,
    reviews: []
  },
  {
    id: '93',
    name: 'Drum Set',
    description: '5-piece complete drum set with cymbals, stool, and drumsticks. Great for beginners and intermediate players.',
    price: 499.99,
    category: 'c12',
    image: 'https://images.unsplash.com/photo-1543443258-92b04ad5ec6b?w=500&q=80',
    stock: 10,
    rating: 4.6,
    reviews: []
  },

  // Travel & Luggage
  {
    id: '94',
    name: 'Smart Carry-On Luggage',
    description: 'Smart luggage with built-in USB charger, TSA-approved lock, and location tracking. Perfect for modern travelers.',
    price: 199.99,
    category: 'c13',
    image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500&q=80',
    stock: 50,
    rating: 4.7,
    reviews: []
  },
  {
    id: '95',
    name: 'Travel Backpack',
    description: 'Anti-theft travel backpack with laptop compartment, USB charging port, and water-resistant material.',
    price: 89.99,
    category: 'c13',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    stock: 75,
    rating: 4.6,
    reviews: []
  },
  {
    id: '96',
    name: 'Packing Cube Set',
    description: 'Set of 6 compression packing cubes for organized travel. Includes laundry bag and shoe bag.',
    price: 39.99,
    category: 'c13',
    image: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=500&q=80',
    stock: 100,
    rating: 4.5,
    reviews: []
  },

  // Smart Home
  {
    id: '97',
    name: 'Smart Thermostat',
    description: 'WiFi-enabled smart thermostat with learning capability and energy savings tracking.',
    price: 249.99,
    category: 'c14',
    image: 'https://images.unsplash.com/photo-1567578923208-5cc60003892d?w=500&q=80',
    stock: 40,
    rating: 4.8,
    reviews: []
  },
  {
    id: '98',
    name: 'Video Doorbell',
    description: 'HD video doorbell with two-way audio, motion detection, and night vision. Works with Alexa.',
    price: 179.99,
    category: 'c14',
    image: 'https://images.unsplash.com/photo-1520188740392-665a13f453fc?w=500&q=80',
    stock: 60,
    rating: 4.7,
    reviews: []
  },
  {
    id: '99',
    name: 'Smart Light Starter Kit',
    description: 'Color-changing smart bulb kit with hub. Voice control and scheduling capabilities.',
    price: 129.99,
    category: 'c14',
    image: 'https://images.unsplash.com/photo-1550948537-130a1ce83314?w=500&q=80',
    stock: 80,
    rating: 4.6,
    reviews: []
  },

  // Camera & Photo
  {
    id: '100',
    name: 'Mirrorless Camera',
    description: '24MP mirrorless camera with 4K video capability and advanced autofocus system.',
    price: 999.99,
    category: 'c15',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80',
    stock: 20,
    rating: 4.9,
    reviews: []
  },
  {
    id: '101',
    name: 'Camera Lens Kit',
    description: 'Professional lens kit including wide-angle, telephoto, and macro lenses. Universal compatibility.',
    price: 299.99,
    category: 'c15',
    image: 'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=500&q=80',
    stock: 30,
    rating: 4.7,
    reviews: []
  },
  {
    id: '102',
    name: 'Photography Lighting Kit',
    description: 'Studio lighting kit with softboxes, stands, and carrying case. Perfect for portrait photography.',
    price: 199.99,
    category: 'c15',
    image: 'https://images.unsplash.com/photo-1520549233664-03f65c1d1327?w=500&q=80',
    stock: 25,
    rating: 4.6,
    reviews: []
  },

  // Party & Events
  {
    id: '103',
    name: 'Party Decoration Set',
    description: 'Complete party decoration kit including balloons, banners, and table settings. Multiple themes available.',
    price: 49.99,
    category: 'c16',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&q=80',
    stock: 100,
    rating: 4.5,
    reviews: []
  },
  {
    id: '104',
    name: 'LED Party Lights',
    description: 'Multi-color LED party lights with sound activation and various effects. Perfect for any celebration.',
    price: 39.99,
    category: 'c16',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=80',
    stock: 75,
    rating: 4.4,
    reviews: []
  },
  {
    id: '105',
    name: 'Event Planning Kit',
    description: 'Professional event planning kit with timeline templates, checklists, and vendor management tools.',
    price: 79.99,
    category: 'c16',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=500&q=80',
    stock: 50,
    rating: 4.6,
    reviews: []
  },

  // Industrial & Tools
  {
    id: '106',
    name: 'Power Tool Set',
    description: '20V cordless power tool combo kit including drill, impact driver, saw, and work light.',
    price: 399.99,
    category: 'c17',
    image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=500&q=80',
    stock: 30,
    rating: 4.8,
    reviews: []
  },
  {
    id: '107',
    name: 'Professional Tool Box',
    description: 'Heavy-duty rolling tool box with multiple compartments and ball-bearing drawer slides.',
    price: 199.99,
    category: 'c17',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&q=80',
    stock: 40,
    rating: 4.7,
    reviews: []
  },
  {
    id: '108',
    name: 'Safety Equipment Set',
    description: 'Complete safety gear set including hard hat, safety glasses, ear protection, and work gloves.',
    price: 89.99,
    category: 'c17',
    image: 'https://images.unsplash.com/photo-1622219809260-ce065fc5277f?w=500&q=80',
    stock: 60,
    rating: 4.6,
    reviews: []
  },

  // Art & Crafts
  {
    id: '61',
    name: 'Professional Art Set',
    description: '72-piece premium art supplies set including colored pencils, watercolors, acrylics, and various brushes. Perfect for both beginners and experienced artists.',
    price: 89.99,
    category: 'c9',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80',
    stock: 40,
    rating: 4.8,
    reviews: []
  },
  {
    id: '62',
    name: 'Drawing Tablet',
    description: '10-inch digital drawing tablet with 8192 pressure levels. Includes wireless pen and customizable shortcut keys. Compatible with major design software.',
    price: 199.99,
    category: 'Art & Crafts',
    image: 'https://images.unsplash.com/photo-1526657782461-9fe13402a841?w=500&q=80',
    stock: 25,
    rating: 4.7,
    reviews: []
  },
  {
    id: '63',
    name: 'Pottery Wheel Kit',
    description: 'Complete pottery wheel kit with variable speed control and LED work light. Includes clay, tools, and instructional guide for beginners.',
    price: 299.99,
    category: 'Art & Crafts',
    image: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=500&q=80',
    stock: 15,
    rating: 4.6,
    reviews: []
  },
  {
    id: '64',
    name: 'Scrapbooking Kit',
    description: 'Deluxe scrapbooking set with 300+ pieces including papers, stickers, scissors, and embellishments. Perfect for preserving memories in style.',
    price: 49.99,
    category: 'Art & Crafts',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&q=80',
    stock: 50,
    rating: 4.5,
    reviews: []
  },
  {
    id: '65',
    name: 'Canvas Paint Set',
    description: '24 high-quality acrylic paints with 12 canvases and brush set. Includes color mixing guide and painting techniques booklet.',
    price: 69.99,
    category: 'Art & Crafts',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&q=80',
    stock: 35,
    rating: 4.7,
    reviews: []
  },
  {
    id: '66',
    name: 'Jewelry Making Kit',
    description: 'Complete jewelry crafting kit with beads, wires, pliers, and findings. Includes storage box and step-by-step project guide.',
    price: 79.99,
    category: 'Art & Crafts',
    image: 'https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?w=500&q=80',
    stock: 30,
    rating: 4.6,
    reviews: []
  },
  {
    id: '67',
    name: 'Calligraphy Set',
    description: 'Professional calligraphy kit with 6 nibs, pen holder, and premium inks. Includes practice sheets and detailed instruction manual.',
    price: 39.99,
    category: 'Art & Crafts',
    image: 'https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?w=500&q=80',
    stock: 45,
    rating: 4.5,
    reviews: []
  },
  {
    id: '68',
    name: 'Craft Paper Collection',
    description: '200 sheets of premium craft paper in various patterns and textures. Perfect for origami, card making, and scrapbooking projects.',
    price: 29.99,
    category: 'Art & Crafts',
    image: 'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?w=500&q=80',
    stock: 60,
    rating: 4.4,
    reviews: []
  },
  {
    id: '69',
    name: 'Wool Knitting Set',
    description: 'Premium knitting kit with assorted yarn colors, needles, and pattern book. Perfect for creating scarves, hats, and other accessories.',
    price: 54.99,
    category: 'Art & Crafts',
    image: 'https://images.unsplash.com/photo-1566055909643-a51b4271aa47?w=500&q=80',
    stock: 40,
    rating: 4.7,
    reviews: []
  },
  {
    id: '70',
    name: 'Resin Art Kit',
    description: 'Complete epoxy resin art kit with molds, pigments, and tools. Includes safety equipment and detailed tutorial guide.',
    price: 89.99,
    category: 'Art & Crafts',
    image: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=500&q=80',
    stock: 25,
    rating: 4.8,
    reviews: []
  }
];