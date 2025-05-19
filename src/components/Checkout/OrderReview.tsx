import React from 'react';
import { useCart } from '../../context/CartContext';

const OrderReview: React.FC = () => {
  const { cartItems, totalPrice } = useCart();
  
  const subtotal = totalPrice;
  const shipping = 0; // Free shipping
  const taxes = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + taxes;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Review Your Order</h2>
      
      <div className="space-y-4 mb-6">
        {cartItems.map(item => {
          const { product, quantity } = item;
          const discountedPrice = product.discount 
            ? product.price * (1 - product.discount / 100) 
            : product.price;

          return (
            <div key={product.id} className="flex border-b border-gray-100 pb-4">
              <div className="w-16 h-16 flex-shrink-0">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="ml-3 flex-grow">
                <h3 className="font-medium text-gray-800">{product.name}</h3>
                <div className="flex justify-between mt-1">
                  <span className="text-gray-600">Qty: {quantity}</span>
                  <span className="font-medium text-gray-800">${(discountedPrice * quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="space-y-2 border-t border-gray-200 pt-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-800">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="text-green-600">Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Taxes</span>
          <span className="text-gray-800">${taxes.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
          <span className="font-bold text-gray-800">Total</span>
          <span className="font-bold text-blue-700">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;