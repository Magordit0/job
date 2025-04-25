import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 1, name: 'Fashion', icon: 'shirt' },
  { id: 2, name: 'Electronics', icon: 'smartphone' },
  { id: 3, name: 'Home & Garden', icon: 'home' },
  { id: 4, name: 'Beauty', icon: 'sparkles' }
];

export const products: Product[] = [
  {
    id: 1,
    title: 'Magcubic HY310 4K HD 1080p WiFi 6 LED Projector 330 ANSI Lumens',
    price: 269.933,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_869468-CBT83145208854_032025-F.webp',
    category: 'Electronics',
    rating: 4.5,
    discount: 68,
    description: 'Turn any space into a private cinema with the Magcubic HY310. This smart mini projector features native 1080p resolution (4K supported), ultra-fast WiFi 6 connectivity, and 330 ANSI lumens of brightness. Its sleek, portable design makes it ideal for home movie nights, business presentations, or outdoor adventures. ',
    features: [
      'Native resolution: 1080p (supports 4K)',
      'Brightness: 330 ANSI lumens',
      'Wireless: WiFi 6 + Bluetooth',
      'Built-in smart operating system',
      'Compact and travel-friendly'  
    ],
    specifications: {
      brand: 'Magcubic',
      model: 'Magcubic',
      color: 'White',
      weight: '700g',
      warranty: '6 month'
    }
  },
  {
    id: 2,
    title: 'Smart Mini Projector Full HD 1080p 4K – WiFi 6 + Bluetooth',
    price: 182.022,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_685611-CBT83202162425_032025-F.webp',
    category: 'Fashion',
    rating: 4.2,
    discount: 66,
    description: 'Small in size, big on performance. This smart mini projector delivers native Full HD 1080p resolution with 4K support, next-gen WiFi 6, and Bluetooth connectivity for seamless streaming. Perfect for binge-watching, gaming, or presentations anywhere you go.',
    features: [
      'Resolution: Full HD 1080p (4K supported)',
      'Fast wireless connection with WiFi 6 and Bluetooth',
      'Built-in smart system with streaming app access',
      'Ultra-portable and lightweight design',
      'Sharp, vivid projection on any surface'
    ],
    specifications: {
      brand: 'Generic',
      model: 'Smart Mini Full HD Projector',
      color: 'White',
      
    }
  },
  {
    id: 3,
    title: 'Samsung The Freestyle 2nd Gen Smart Projector',
    price: 999.999,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_786509-MLU72746413520_112023-F.webp',
    category: 'Home & Garden',
    rating: 4.7,
    discount: 67,
    description: 'WiFi-enabled LED strip lights that can be controlled via smartphone app. Features 16 million colors, various modes, and music sync capability. Perfect for home decoration and ambient lighting.',
    features: [
      'WiFi connectivity',
      'Full HD resolution (1920x1080)',
      '180° adjustable projection angle',
      'Tizen OS with built-in apps (Netflix, YouTube, more)',
      'Immersive 360° speaker system',
      'Sleek, modern, and portable'
    ],
    specifications: {
      brand: 'Samsung',
      model: 'SP-LSP3BLAXZL',
      color: 'White',
    }
  },
  {
    id: 4,
    title: 'Magcubic HY300 Pro+ 4K 720p WiFi LED Projector – 260 ANSI Lumens',
    price: 183.399,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_860480-CBT83435530541_032025-F.webp',
    category: 'Beauty',
    rating: 4.8,
    discount: 58,
    description: 'The perfect balance of portability and performance. The Magcubic HY300 Pro+ offers native 720p resolution (4K supported), 260 ANSI lumens of brightness, and WiFi connectivity. Ideal for casual movie nights, travel, or spontaneous presentations—without compromising on quality.  ',
    features: [
      'Resolution: 720p native (supports 4K)',
      'Brightness: 260 ANSI lumens',
      'WiFi-enabled for wireless streaming',
      'Smart system with pre-installed apps',
      'Lightweight and compact design',

    ],
    specifications: {
      brand: 'Magcubic',
      model: 'Magcubic',
      color: 'White',
    }
  }
];