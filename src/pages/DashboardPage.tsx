import React from 'react';
import { salesData } from '../data/salesData';
import SalesSummary from '../components/Dashboard/SalesSummary';
import SalesChart from '../components/Dashboard/SalesChart';
import SalesTable from '../components/Dashboard/SalesTable';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Sales Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="mb-8">
        <SalesSummary salesData={salesData} />
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <SalesChart salesData={salesData} />
        
        <div className="bg-white p-6 rounded-lg shadow-md h-full">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Monthly Performance</h2>
          
          <div className="h-80 flex items-center justify-center">
            <div className="text-center px-6 py-12 bg-blue-50 rounded-lg w-full">
              <div className="text-4xl font-bold text-blue-700 mb-2">$4,299.92</div>
              <p className="text-gray-600">Total Revenue in January 2025</p>
              <div className="mt-4 flex items-center justify-center text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>18% vs. last month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Sales Table */}
      <SalesTable salesData={salesData} />
    </div>
  );
};

export default DashboardPage;