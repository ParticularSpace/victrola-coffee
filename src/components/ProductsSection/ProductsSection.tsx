import React from 'react';
// Import the individual ProductCard component, which we will define next.
import ProductCard from './ProductCard';

// Mock data for the products, you would replace this with real data, possibly fetched from an API.
const products = [
  {
    id: 1,
    name: 'Espresso',
    imageUrl: 'path-to-espresso-image.jpg',
    description: 'Rich and creamy espresso shot.',
  },
  {
    id: 2,
    name: 'Cappuccino',
    imageUrl: 'path-to-cappuccino-image.jpg',
    description: 'Perfectly foamed milk mixed with espresso.',
  },
    {
        id: 3,
        name: 'Latte',
        imageUrl: 'path-to-latte-image.jpg',
        description: 'Creamy milk mixed with espresso.',
    },
    {
        id: 4,
        name: 'Americano',
        imageUrl: 'path-to-americano-image.jpg',
        description: 'Espresso mixed with hot water.',
    },
    {
        id: 5,
        name: 'Macchiato',
        imageUrl: 'https://images.unsplash.com/photo-1581093458791-9a9f1e9e9c7a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjY2hpdGFvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        description: 'Espresso topped with foamed milk.',
    },
    {
        id: 6,
        name: 'Mocha',
        imageUrl: 'https://images.unsplash.com/photo-1581093458791-9a9f1e9e9c7a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjY2hpdGFvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        description: 'Espresso mixed with chocolate and milk.',
    },
    {
        id: 7,
        name: 'Flat White',
        imageUrl: 'https://images.unsplash.com/photo-1581093458791-9a9f1e9e9c7a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjY2hpdGFvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        description: 'Espresso mixed with steamed milk.',
    },
    {
        id: 8,
        name: 'Cortado',
        imageUrl: 'https://images.unsplash.com/photo-1581093458791-9a9f1e9e9c7a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjY2hpdGFvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        description: 'Espresso mixed with a small amount of steamed milk.',
    }
];

const ProductsSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
