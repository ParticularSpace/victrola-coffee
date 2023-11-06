import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div
      className="hero bg-cover bg-center bg-black h-96 text-white flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url('path-to-your-hero-background-image.jpg')`,
      }}
    >
      <h2 className="text-4xl font-bold mb-4">Freshly Brewed Coffee</h2>
      <p className="text-xl mb-6">
        Start your day with the aroma of freshly brewed coffee.
      </p>
      <div>
        <a
          href="/menu"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-2"
        >
          View Menu
        </a>
        <a
          href="/order"
          className="bg-transparent hover:bg-white text-white-700 font-semibold hover:text-green-700 py-2 px-4 border border-white hover:border-transparent rounded-full"
        >
          Order Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
