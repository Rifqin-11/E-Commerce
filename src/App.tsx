import React from 'react';
import { Layout } from './components/Layout';
import { ProductCard } from './components/ProductCard';

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    description: "Premium headphones with noise cancellation and exceptional sound quality."
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description: "Modern smartwatch with health tracking and notifications."
  },
  {
    id: 3,
    title: "Camera Lens",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500",
    description: "Professional camera lens for stunning photography."
  },
  {
    id: 4,
    title: "Laptop Stand",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    description: "Ergonomic laptop stand for better posture and comfort."
  }
  {
    id: 5,
    title: "Macbook Air M1 2020",
    price: 999,
    image: "https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-white-bed-zR6r-CpCnmg=500",
    description: "Cheap, Slim Laptop"
  }
];

function App() {
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Featured Products</h1>
        <p className="mt-2 text-gray-600">Check out our latest collection of premium products.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
    </Layout>
  );
}

export default App;
