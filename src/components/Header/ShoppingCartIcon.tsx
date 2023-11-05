import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingCartIcon: React.FC = () => {
  // Logic to handle cart items and navigation goes here

  return (
    <div className="flex items-center">
      <Link to="/cart" className="hover:text-gray-300">
        {/* Icon and possibly item count */}
        <span className="inline-block p-2">
          🛒 Cart
        </span>
      </Link>
    </div>
  );
};

export default ShoppingCartIcon;
