export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  discount?: number;
  isFlashDeal?: boolean;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}

export interface CartItem extends Product {
  quantity: number;
}