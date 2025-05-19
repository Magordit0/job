import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Magcubic HY310 4K HD 1080p WiFi 6 LED Projector",
    price: 399.99,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_666867-CBT83190012597_032025-F.webp",
    description: "Turn any space into a private cinema with the Magcubic HY310. This smart mini projector features native 1080p resolution (4K supported), ultra-fast WiFi 6 connectivity, and 330 ANSI lumens of brightness. Its sleek, portable design makes it ideal for home movie nights, business presentations, or outdoor adventures.",
    features: [
      "Native resolution: 1080p (supports 4K)",
      "Brightness: 330 ANSI lumens",
      "Wireless: WiFi 6 + Bluetooth",
      "Built-in smart operating system",
      "Compact and travel-friendly"
    ],
    rating: 4.5,
    inStock: true,
    discount: 15
  },
  {
    id: 2,
    name: "Smart Mini Projector Full HD 1080p 4K",
    price: 299.99,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_685611-CBT83202162425_032025-F.webp",
    description: "Small in size, big on performance. This smart mini projector delivers native Full HD 1080p resolution with 4K support, next-gen WiFi 6, and Bluetooth connectivity for seamless streaming. Perfect for binge-watching, gaming, or presentations anywhere you go.",
    features: [
      "Resolution: Full HD 1080p (4K supported)",
      "Fast wireless connection with WiFi 6 and Bluetooth",
      "Built-in smart system with streaming app access",
      "Ultra-portable and lightweight design",
      "Sharp, vivid projection on any surface"
    ],
    rating: 4.2,
    inStock: true
  },
  {
    id: 3,
    name: "Samsung The Freestyle 2nd Gen Smart Projector",
    price: 799.99,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_727794-MLA84852979253_052025-F.webp",
    description: "Experience cutting-edge entertainment with The Freestyle by Samsung. This second-generation smart projector offers immersive Full HD visuals and a 180° swivel design to project on walls, ceilings, or wherever you want. It comes with built-in voice assistants, streaming apps, and 360° audio for a complete cinematic experience.",
    features: [
      "Full HD resolution (1920x1080)",
      "180° adjustable projection angle",
      "Tizen OS with built-in apps (Netflix, YouTube, more)",
      "Immersive 360° speaker system",
      "Sleek, modern, and portable"
    ],
    rating: 4.8,
    inStock: true,
    discount: 10
  },
  {
    id: 4,
    name: "Magcubic HY300 Pro+ 4K 720p WiFi LED Projector",
    price: 249.99,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_869468-CBT83145208854_032025-F.webp",
    description: "The perfect balance of portability and performance. The Magcubic HY300 Pro+ offers native 720p resolution (4K supported), 260 ANSI lumens of brightness, and WiFi connectivity. Ideal for casual movie nights, travel, or spontaneous presentations—without compromising on quality.",
    features: [
      "Resolution: 720p native (supports 4K)",
      "Brightness: 260 ANSI lumens",
      "WiFi-enabled for wireless streaming",
      "Smart system with pre-installed apps",
      "Lightweight and compact design"
    ],
    rating: 4.0,
    inStock: true,
    discount: 20
  }
];