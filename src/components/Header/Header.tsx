import React from "react";
import Navigation from "./Navigation";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center"> 
        <h1 className="text-2xl font-bold mr-4">Victrola Coffee</h1> 
        <Navigation />
      </div>
      <ShoppingCartIcon />
    </header>
  );
};

export default Header;
