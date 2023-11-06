import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import ProductsSection from '../components/ProductsSection/ProductsSection';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
  return (
      <main className="flex-grow p-4">
        <HeroSection />
        <ProductsSection />
        <Footer />
      </main>
  );
};

export default Home;
