import React, { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import ChatBot from '../components/ChatBot';

const ProductsPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedResolutions, setSelectedResolutions] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    // Apply filters
    applyFilters(term, priceRange, selectedResolutions);
  };

  const handlePriceChange = (min: number, max: number) => {
    const newRange: [number, number] = [min, max];
    setPriceRange(newRange);
    applyFilters(searchTerm, newRange, selectedResolutions);
  };

  const handleResolutionChange = (resolution: string) => {
    let newResolutions: string[];
    
    if (selectedResolutions.includes(resolution)) {
      newResolutions = selectedResolutions.filter(r => r !== resolution);
    } else {
      newResolutions = [...selectedResolutions, resolution];
    }
    
    setSelectedResolutions(newResolutions);
    applyFilters(searchTerm, priceRange, newResolutions);
  };

  const applyFilters = (
    term: string, 
    range: [number, number], 
    resolutions: string[]
  ) => {
    let result = products;
    
    // Apply search
    if (term) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase())
      );
    }
    
    // Apply price range
    result = result.filter(product => 
      product.price >= range[0] && product.price <= range[1]
    );
    
    // Apply resolution filters
    if (resolutions.length > 0) {
      result = result.filter(product => {
        const productResolution = product.features.find(f => 
          f.toLowerCase().includes('resolution') || 
          f.toLowerCase().includes('1080p') || 
          f.toLowerCase().includes('720p') || 
          f.toLowerCase().includes('4k')
        );
        
        if (!productResolution) return false;
        
        return resolutions.some(r => 
          productResolution.toLowerCase().includes(r.toLowerCase())
        );
      });
    }
    
    setFilteredProducts(result);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setPriceRange([0, 1000]);
    setSelectedResolutions([]);
    setFilteredProducts(products);
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">All Projectors</h1>
      
      {/* Search and Filter Controls */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search projectors..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors md:w-auto"
          >
            <SlidersHorizontal size={20} />
            <span>Filters</span>
          </button>
        </div>
        
        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Filters</h3>
              <button 
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
              >
                <X size={16} />
                Clear All
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price Range */}
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Price Range</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="price-all"
                      name="price-range"
                      checked={priceRange[0] === 0 && priceRange[1] === 1000}
                      onChange={() => handlePriceChange(0, 1000)}
                      className="mr-2"
                    />
                    <label htmlFor="price-all">All Prices</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="price-under-300"
                      name="price-range"
                      checked={priceRange[0] === 0 && priceRange[1] === 300}
                      onChange={() => handlePriceChange(0, 300)}
                      className="mr-2"
                    />
                    <label htmlFor="price-under-300">Under $300</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="price-300-500"
                      name="price-range"
                      checked={priceRange[0] === 300 && priceRange[1] === 500}
                      onChange={() => handlePriceChange(300, 500)}
                      className="mr-2"
                    />
                    <label htmlFor="price-300-500">$300 - $500</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="price-over-500"
                      name="price-range"
                      checked={priceRange[0] === 500 && priceRange[1] === 1000}
                      onChange={() => handlePriceChange(500, 1000)}
                      className="mr-2"
                    />
                    <label htmlFor="price-over-500">Over $500</label>
                  </div>
                </div>
              </div>
              
              {/* Resolution */}
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Resolution</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="res-4k"
                      checked={selectedResolutions.includes('4k')}
                      onChange={() => handleResolutionChange('4k')}
                      className="mr-2"
                    />
                    <label htmlFor="res-4k">4K</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="res-1080p"
                      checked={selectedResolutions.includes('1080p')}
                      onChange={() => handleResolutionChange('1080p')}
                      className="mr-2"
                    />
                    <label htmlFor="res-1080p">1080p (Full HD)</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="res-720p"
                      checked={selectedResolutions.includes('720p')}
                      onChange={() => handleResolutionChange('720p')}
                      className="mr-2"
                    />
                    <label htmlFor="res-720p">720p (HD)</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-800 mb-2">No projectors found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
          <button
            onClick={clearFilters}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
      
      <ChatBot />
    </div>
  );
};

export default ProductsPage;