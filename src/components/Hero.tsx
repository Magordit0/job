import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="pt-20 pb-8">
      <div className="relative h-[500px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full bg-black/30 z-10"></div>
        <video
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
          poster="https://es.web.img3.acsta.net/r_654_368/img/9f/96/9f9686ca7f97de3ad3e95ae096f486b9.jpg"
        >
          <source
            src="https://youtube.com/shorts/fVReN64A8gg?si=qsJxS4bijcihn_PA"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Hero Content */}
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Transform Any Space Into Your Personal Cinema
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Discover cutting-edge projectors with stunning 4K resolution, smart features, and unmatched portability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all flex items-center justify-center"
              >
                Shop Projectors
                <ChevronRight size={20} className="ml-1" />
              </Link>
              <button
                onClick={() => {
                  const videoSection = document.getElementById('product-video');
                  if (videoSection) {
                    videoSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/40 font-semibold px-6 py-3 rounded-lg transition-all flex items-center justify-center"
              >
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Video Section */}
      <div id="product-video" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Experience the ProScreen Difference
          </h2>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <div className="aspect-w-16 aspect-h-9 relative">
              <div className="w-full aspect-video">
                <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/fVReN64A8gg"
                title="Video de YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-300 max-w-2xl mx-auto">
              Watch how our projectors transform any space into an immersive entertainment experience. 
              From home theaters to outdoor movie nights, ProScreen delivers unmatched quality and versatility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;