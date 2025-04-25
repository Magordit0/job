import React, { useState, useEffect } from 'react';

const banners = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
    title: 'Summer Sale',
    subtitle: 'Up to 70% off'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg',
    title: 'New Arrivals',
    subtitle: 'Shop the latest trends'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg',
    title: 'Flash Deals',
    subtitle: 'Limited time offers'
  }
];

const Banner: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner(prev => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative h-48 md:h-64 lg:h-80 mb-6 overflow-hidden rounded-lg">
      <div 
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentBanner * 100}%)` }}
      >
        {banners.map((banner) => (
          <div 
            key={banner.id} 
            className="relative w-full h-full flex-shrink-0"
          >
            <img 
              src={banner.image} 
              alt={banner.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex flex-col justify-center px-6 md:px-10">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {banner.title}
              </h2>
              <p className="text-white text-sm md:text-base lg:text-lg">
                {banner.subtitle}
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full w-max text-sm md:text-base hover:bg-blue-600 transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentBanner ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentBanner(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;