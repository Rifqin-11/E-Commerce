import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  description: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
          <button className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700">
            <ShoppingCart className="h-5 w-5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};