import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-500 sm:hidden" />
            <span className="ml-2 text-xl font-bold text-gray-800">ShopApp</span>
          </div>
          
          <div className="hidden sm:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Categories</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 text-gray-500" />
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-500" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};