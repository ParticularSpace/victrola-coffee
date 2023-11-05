import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/menu" className="hover:text-gray-300">Menu</Link></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;
