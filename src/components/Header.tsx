
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="victrola-logo.png" alt="Victrola Coffee Logo" />
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
