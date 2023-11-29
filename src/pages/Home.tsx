import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import Footer from "../components/Footer/Footer";
import InfoPanel from "../components/InfoPanel/InfoPanel";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-2 sm:p-4">
        <HeroSection />
        <ProductsSection />
        <InfoPanel
          title="Our Commitment to Quality"
          description="We source the finest beans and ingredients to ensure every cup of coffee is perfect."
          imageUrl="https://via.placeholder.com/500"
          imageAlt="A fine cup of coffee"
          reverse={false} 
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
