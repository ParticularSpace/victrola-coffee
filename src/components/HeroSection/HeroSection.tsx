import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div
      className="hero bg-cover bg-center bg-black h-96 text-white flex flex-col justify-center items-center overflow-hidden"
      style={{
        backgroundImage: `url('https://www.victrolacoffee.com/cdn/shop/files/V2-Cafe-Outside_1440x640.png?v=1678382641')`,
      }}
    >
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
