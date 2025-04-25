import React from 'react';
import { categories } from '../data/products';
import { Shirt, Smartphone, Home, Sparkles, Gamepad2, Dumbbell, Gem, Utensils } from 'lucide-react';

const CategoryNav: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shirt': return <Shirt className="w-6 h-6 mb-1" />;
      case 'smartphone': return <Smartphone className="w-6 h-6 mb-1" />;
      case 'home': return <Home className="w-6 h-6 mb-1" />;
      case 'sparkles': return <Sparkles className="w-6 h-6 mb-1" />;
      case 'gamepad-2': return <Gamepad2 className="w-6 h-6 mb-1" />;
      case 'dumbbell': return <Dumbbell className="w-6 h-6 mb-1" />;
      case 'gem': return <Gem className="w-6 h-6 mb-1" />;
      case 'utensils': return <Utensils className="w-6 h-6 mb-1" />;
      default: return <Shirt className="w-6 h-6 mb-1" />;
    }
  };
  
  return (
    <div className="bg-white py-4 mb-6 shadow-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <div className="text-blue-500">
                {getIcon(category.icon)}
              </div>
              <span className="text-xs text-center">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;