import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, LogOut, ShoppingBag, Clock, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AccountPage: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  if (!isAuthenticated || !user) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">My Account</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Account Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <User size={24} className="text-blue-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-800">{user.name}</h2>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <nav className="space-y-1">
                <a 
                  href="#profile" 
                  className="flex items-center px-4 py-2 text-gray-700 bg-blue-50 rounded-lg font-medium"
                >
                  <User size={18} className="mr-3 text-blue-600" />
                  <span>Profile</span>
                </a>
                <a 
                  href="#orders" 
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                >
                  <ShoppingBag size={18} className="mr-3 text-gray-500" />
                  <span>Orders</span>
                </a>
                <a 
                  href="#history" 
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                >
                  <Clock size={18} className="mr-3 text-gray-500" />
                  <span>Purchase History</span>
                </a>
                <a 
                  href="#settings" 
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                >
                  <Settings size={18} className="mr-3 text-gray-500" />
                  <span>Settings</span>
                </a>
                <button 
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium w-full text-left"
                >
                  <LogOut size={18} className="mr-3" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
        
        {/* Account Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden" id="profile">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Profile Information</h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={user.name}
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="flex items-center">
                    <input
                      type="email"
                      value={user.email}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                    <Mail size={20} className="ml-3 text-gray-500" />
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Shipping Address
                </label>
                <textarea
                  rows={3}
                  placeholder="No address saved yet"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div className="mt-6">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8" id="orders">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Recent Orders</h2>
            </div>
            
            <div className="p-6">
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <ShoppingBag size={24} className="text-gray-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-1">No orders yet</h3>
                <p className="text-gray-600 mb-4">
                  When you place orders, they will appear here.
                </p>
                <button
                  onClick={() => navigate('/products')}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;