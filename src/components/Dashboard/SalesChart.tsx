import React from 'react';
import { Sale } from '../../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SalesChartProps {
  salesData: Sale[];
}

interface ChartData {
  name: string;
  sales: number;
}

const SalesChart: React.FC<SalesChartProps> = ({ salesData }) => {
  // Group sales by product
  const productSales = salesData.reduce((acc: Record<string, number>, sale) => {
    const shortName = sale.product.split(' ')[0]; // Use first word of product name for chart
    acc[shortName] = (acc[shortName] || 0) + sale.amount;
    return acc;
  }, {});
  
  // Convert to chart data format
  const chartData: ChartData[] = Object.entries(productSales).map(([name, sales]) => ({
    name,
    sales: parseFloat(sales.toFixed(2))
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Sales by Product</h2>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => [`$${value}`, 'Sales']} />
            <Legend />
            <Bar dataKey="sales" name="Sales Amount" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;