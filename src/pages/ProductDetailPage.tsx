import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ChatBot from '../components/ChatBot';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications'>('description');
  const [showFaq, setShowFaq] = useState<number | null>(null);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">We couldn't find the product you're looking for.</p>
        <button
          onClick={() => navigate('/products')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Products
        </button>
      </div>
    );
  }
  
  const isInCart = cartItems.some(item => item.product.id === product.id);
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate('/cart');
  };
  
  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate('/checkout');
  };
  
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, Math.min(10, newQuantity)));
  };
  
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;
  
  const toggleFaq = (index: number) => {
    setShowFaq(showFaq === index ? null : index);
  };
  
  const faqs = [
    {
      question: "Does this projector come with a warranty?",
      answer: "Yes, all our projectors come with a standard 1-year manufacturer warranty that covers defects in materials and workmanship. Extended warranties are available at checkout."
    },
    {
      question: "What is the lamp life of this projector?",
      answer: "Our LED projectors have a lamp life of approximately 30,000 hours, which means you could use it for 4 hours every day for over 20 years."
    },
    {
      question: "Can I connect external speakers to this projector?",
      answer: "Yes, all our projectors feature audio output ports (3.5mm jack) and Bluetooth connectivity for connecting external speakers or sound systems."
    },
    {
      question: "What is the recommended projection distance?",
      answer: "For optimal image quality, we recommend a projection distance of 6-10 feet for a 60-100 inch screen. The exact specifications can vary by model."
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-auto object-contain rounded"
          />
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">{product.rating} Rating</span>
          </div>
          
          <div className="mb-6">
            {product.discount ? (
              <div className="flex items-center">
                <span className="text-3xl font-bold text-blue-700">${discountedPrice.toFixed(2)}</span>
                <span className="text-lg text-gray-500 line-through ml-3">${product.price.toFixed(2)}</span>
                <span className="ml-3 bg-red-100 text-red-600 px-2 py-1 text-sm font-semibold rounded">
                  {product.discount}% OFF
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-blue-700">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="px-3 py-1 border border-gray-300 rounded-l-lg text-gray-600 hover:bg-gray-100"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b border-gray-300 text-center min-w-[40px]">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="px-3 py-1 border border-gray-300 rounded-r-lg text-gray-600 hover:bg-gray-100"
                disabled={quantity >= 10}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <button
              onClick={handleAddToCart}
              className={`flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-colors ${
                isInCart
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isInCart ? <Check size={20} /> : <ShoppingCart size={20} />}
              {isInCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
            
            <button
              onClick={handleBuyNow}
              className="flex items-center justify-center gap-2 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-colors"
            >
              Buy Now
            </button>
          </div>
          
          {/* Key Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('description')}
            className={`px-6 py-3 font-medium text-sm transition-colors ${
              activeTab === 'description'
                ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('specifications')}
            className={`px-6 py-3 font-medium text-sm transition-colors ${
              activeTab === 'specifications'
                ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Specifications
          </button>
        </div>
        
        <div className="p-6">
          {activeTab === 'description' ? (
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">Display</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>Resolution: {product.features[0].split(':')[1]?.trim() || 'Varies by model'}</li>
                    <li>Brightness: {product.features[1].split(':')[1]?.trim() || 'Varies by model'}</li>
                    <li>Contrast Ratio: 3000:1</li>
                    <li>Display Technology: LED</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">Connectivity</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>Wireless: {product.features[2]?.split(':')[1]?.trim() || 'WiFi'}</li>
                    <li>HDMI Ports: 2</li>
                    <li>USB Ports: 2</li>
                    <li>Audio Output: 3.5mm Jack</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">Physical</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>Dimensions: 7.5 x 5.3 x 2.4 inches</li>
                    <li>Weight: 2.1 lbs</li>
                    <li>Color: Black/Silver</li>
                    <li>Mounting Options: Tripod, Ceiling</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-gray-800 mb-2">Other</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>Operating System: {product.features[3]?.split(':')[1]?.trim() || 'Smart OS'}</li>
                    <li>Built-in Speaker: Yes</li>
                    <li>Lamp Life: 30,000 hours</li>
                    <li>Warranty: 1 Year</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* FAQs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <h3 className="text-xl font-bold text-gray-800 p-6 border-b border-gray-200">
          Frequently Asked Questions
        </h3>
        
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left font-medium text-gray-800"
              >
                {faq.question}
                {showFaq === index ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </button>
              
              {showFaq === index && (
                <p className="mt-3 text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <ChatBot />
    </div>
  );
};

export default ProductDetailPage;