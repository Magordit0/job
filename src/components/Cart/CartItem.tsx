import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  const itemTotal = discountedPrice * quantity;

  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-gray-200">
      <div className="flex-shrink-0 w-full sm:w-24 h-24 mb-4 sm:mb-0 sm:mr-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover rounded"
        />
      </div>
      
      <div className="flex-grow pr-4">
        <h3 className="font-medium text-gray-800">{product.name}</h3>
        <div className="mt-1">
          {product.discount ? (
            <div className="flex items-center">
              <span className="text-blue-700 font-medium">${discountedPrice.toFixed(2)}</span>
              <span className="text-gray-500 text-sm line-through ml-2">${product.price.toFixed(2)}</span>
              <span className="ml-2 text-xs font-semibold bg-red-100 text-red-600 px-1.5 py-0.5 rounded">
                SAVE {product.discount}%
              </span>
            </div>
          ) : (
            <span className="text-blue-700 font-medium">${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
      
      <div className="flex items-center mt-4 sm:mt-0">
        <div className="flex items-center border border-gray-300 rounded">
          <button 
            onClick={handleDecrease}
            className="px-2 py-1 text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          
          <span className="px-2 py-1 w-10 text-center">{quantity}</span>
          
          <button 
            onClick={handleIncrease}
            className="px-2 py-1 text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <button 
          onClick={handleRemove}
          className="ml-4 text-gray-500 hover:text-red-600 transition-colors"
          aria-label="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
      
      <div className="text-right font-semibold text-gray-800 mt-4 sm:mt-0 sm:ml-4 sm:min-w-[80px]">
        ${itemTotal.toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;