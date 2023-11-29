import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg font-bold">Coffee Shop</h3>
            <p className="text-sm">
              123 Coffee Avenue<br />
              Seattle, WA 12345
            </p>
          </div>
          <div className="mb-6 sm:mb-0">
            <span className="font-bold mb-2">Follow Us</span>
            <div className="flex justify-center sm:justify-start space-x-4">
              {/* Icons or text links to social media here */}
              <a href="#" className="hover:text-gray-400">Instagram</a>
              <a href="#" className="hover:text-gray-400">Facebook</a>
              <a href="#" className="hover:text-gray-400">Twitter</a>
            </div>
          </div>
          <div>
            <span className="font-bold mb-2">Contact Us</span>
            <p className="text-sm">
              Email: contact@coffeeshop.com<br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <div className="text-sm text-center mt-8">
          © {new Date().getFullYear()} Coffee Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
