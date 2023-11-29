import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <nav className="flex justify-between items-center">
      {/* Toggle search bar visibility on small screens */}
      <div className="sm:hidden">
        <button onClick={() => setIsSearchBarVisible(!isSearchBarVisible)}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        {/* Full search bar for larger screens, hidden on smaller screens */}
        <form onSubmit={handleSearch} className="flex text-black hidden sm:flex">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Enter
          </button>
        </form>

        {/* Collapsed search bar for smaller screens */}
        {isSearchBarVisible && (
          <form onSubmit={handleSearch} className="flex text-black sm:hidden">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring"
            />
            <button
              type="submit"
              className="hidden"
            >
              Search
            </button>
          </form>
        )}
      </div>

      {/* Other navigation links can be added here */}
      <ul className="flex space-x-4">{/* Links */}</ul>
    </nav>
  );
};

export default Navigation;
