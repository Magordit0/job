export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  rating: number;
  inStock: boolean;
  discount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  email: string;
  name: string;
}

export interface Sale {
  id: number;
  date: string;
  product: string;
  amount: number;
  customer: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: number;
}