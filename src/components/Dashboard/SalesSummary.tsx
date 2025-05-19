import React from 'react';
import { Sale } from '../../types';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';

interface SalesSummaryProps {
  salesData: Sale[];
}

const SalesSummary: React.FC<SalesSummaryProps> = ({ salesData }) => {
  // Calculate total sales
  const totalSales = salesData.reduce((sum, sale) => sum + sale.amount, 0);
  
  // Count unique customers
  const uniqueCustomers = new Set(salesData.map(sale => sale.customer)).size;
  
  // Count total orders
  const totalOrders = salesData.length;
  
  // Calculate average order value
  const averageOrderValue = totalSales / totalOrders;

  const summaryCards = [
    {
      title: 'Total Sales',
      value: `$${totalSales.toFixed(2)}`,
      icon: <DollarSign size={24} className="text-green-500" />,
      bgColor: 'bg-green-100',
    },
    {
      title: 'Total Orders',
      value: totalOrders,
      icon: <ShoppingBag size={24} className="text-blue-500" />,
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Unique Customers',
      value: uniqueCustomers,
      icon: <Users size={24} className="text-purple-500" />,
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Average Order',
      value: `$${averageOrderValue.toFixed(2)}`,
      icon: <TrendingUp size={24} className="text-orange-500" />,
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryCards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center">
              <div className={`${card.bgColor} p-3 rounded-lg`}>
                {card.icon}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{card.title}</p>
                <h3 className="text-xl font-bold text-gray-800 mt-1">{card.value}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalesSummary;