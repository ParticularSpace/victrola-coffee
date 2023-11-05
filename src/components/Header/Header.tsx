import React from 'react';
import Navigation from './Navigation';
import ShoppingCartIcon from './ShoppingCartIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Coffee Shop</h1>
      <Navigation />
      <ShoppingCartIcon />
    </header>
  );
};

export default Header;
