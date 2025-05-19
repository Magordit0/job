import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, Check } from 'lucide-react';
import OrderReview from '../components/Checkout/OrderReview';
import ShippingForm, { ShippingInfo } from '../components/Checkout/ShippingForm';
import PaymentForm, { PaymentInfo } from '../components/Checkout/PaymentForm';
import { useCart } from '../context/CartContext';
import ChatBot from '../components/ChatBot';

enum CheckoutStep {
  SHIPPING,
  PAYMENT,
  CONFIRMATION
}

const CheckoutPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(CheckoutStep.SHIPPING);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo | null>(null);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);
  const [orderId, setOrderId] = useState('');
  const { clearCart } = useCart();
  const navigate = useNavigate();
  
  const handleShippingComplete = (info: ShippingInfo) => {
    setShippingInfo(info);
    setCurrentStep(CheckoutStep.PAYMENT);
    window.scrollTo(0, 0);
  };
  
  const handlePaymentComplete = (info: PaymentInfo) => {
    setPaymentInfo(info);
    // Generate random order ID
    setOrderId(`ORD-${Math.floor(100000 + Math.random() * 900000)}`);
    setCurrentStep(CheckoutStep.CONFIRMATION);
    // Clear cart after successful order
    clearCart();
    window.scrollTo(0, 0);
  };
  
  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
      
      {/* Checkout Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= CheckoutStep.SHIPPING ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              <Truck size={20} />
            </div>
            <span className={`ml-2 font-medium ${
              currentStep === CheckoutStep.SHIPPING ? 'text-blue-600' : 'text-gray-600'
            }`}>
              Shipping
            </span>
          </div>
          
          <div className={`w-16 h-1 mx-2 ${
            currentStep >= CheckoutStep.PAYMENT ? 'bg-blue-600' : 'bg-gray-200'
          }`} />
          
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= CheckoutStep.PAYMENT ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              <CreditCard size={20} />
            </div>
            <span className={`ml-2 font-medium ${
              currentStep === CheckoutStep.PAYMENT ? 'text-blue-600' : 'text-gray-600'
            }`}>
              Payment
            </span>
          </div>
          
          <div className={`w-16 h-1 mx-2 ${
            currentStep >= CheckoutStep.CONFIRMATION ? 'bg-blue-600' : 'bg-gray-200'
          }`} />
          
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= CheckoutStep.CONFIRMATION ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              <Check size={20} />
            </div>
            <span className={`ml-2 font-medium ${
              currentStep === CheckoutStep.CONFIRMATION ? 'text-blue-600' : 'text-gray-600'
            }`}>
              Confirmation
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {currentStep === CheckoutStep.SHIPPING && (
            <ShippingForm onComplete={handleShippingComplete} />
          )}
          
          {currentStep === CheckoutStep.PAYMENT && (
            <PaymentForm onComplete={handlePaymentComplete} />
          )}
          
          {currentStep === CheckoutStep.CONFIRMATION && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h2>
                <p className="text-gray-600">
                  Your order has been placed successfully. We've sent a confirmation email with all the details.
                </p>
              </div>
              
              <div className="border-t border-b border-gray-200 py-4 my-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-600">Order Number:</span>
                  <span className="font-bold text-gray-800">{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Estimated Delivery:</span>
                  <span className="font-medium text-gray-800">
                    {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-2">Shipping Information</h3>
                {shippingInfo && (
                  <div className="text-gray-700">
                    <p>{shippingInfo.fullName}</p>
                    <p>{shippingInfo.address}</p>
                    <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
                    <p>{shippingInfo.country}</p>
                  </div>
                )}
              </div>
              
              <button
                onClick={handleContinueShopping}
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <OrderReview />
        </div>
      </div>
      
      <ChatBot />
    </div>
  );
};

export default CheckoutPage;