import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ProductsSection from '../components/ProductsSection/ProductsSection';

const Home: React.FC = () => {
  return (
      <main className="flex-grow p-4">
        <HeroSection />
        <ProductsSection />
      
      </main>
  );
};

export default Home;
