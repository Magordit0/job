import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        
        <img 
          src={product.image} 
          alt={product.title} 
          className="flex w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity"></div>
      </div>
      <div className="p-3">
        <div className="flex items-center text-sm text-yellow-500 mb-1">
          <Star size={14} fill="currentColor" />
          <span className="ml-1">{product.rating}</span>
        </div>
        <h3 className="font-medium text-sm mb-1 text-gray-800 line-clamp-2 h-10">
          {product.title}
        </h3>
        <div className="flex items-center mb-2">
          <span className="text-blue-500 font-bold">${product.price.toFixed(2)}</span>
          
        </div>
        <button 
          className="w-full py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition text-sm font-medium transform hover:scale-[1.02] active:scale-[0.98] duration-200"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;