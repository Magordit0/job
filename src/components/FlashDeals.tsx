import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface FlashDealsProps {
  products: Product[];
}

const FlashDeals: React.FC<FlashDealsProps> = ({ products }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 59,
    seconds: 59
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        // Reset timer when it reaches zero
        return { hours: 5, minutes: 59, seconds: 59 };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const flashProducts = products.filter(product => product.isFlashDeal);
  
  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 py-6 px-4 rounded-lg mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-blue-600">⚡ Flash Deals</h2>
        <div className="flex items-center text-blue-600">
          <Clock size={18} className="mr-1" />
          <span className="text-sm font-medium">
            Ends in: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {flashProducts.map(product => (
          <div key={product.id} className="transform transition-transform hover:scale-[1.03] duration-300">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashDeals;