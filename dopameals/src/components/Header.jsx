import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center text-xl font-bold text-green-600">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/80032314-4a54-4a20-b14e-a4eee1d848f2.png"
            alt="Dopameal Logo"
            className="h-8 w-8 mr-1 rounded-full"
          />
          Dopameal
        </Link>

        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-full px-3 bg-gray-50 shadow-sm h-[32px]">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-28 sm:w-40 text-sm text-gray-700 px-2 h-[26px]"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white text-xs font-semibold px-3 h-full rounded-full transition flex items-center justify-center">
            Search
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 items-center text-gray-700 font-medium text-sm">
          <li><Link to="/" className="hover:text-green-600 transition">Home</Link></li>
          <li><Link to="/contact" className="hover:text-green-600 transition">Contact</Link></li>
          <li><Link to="/account" className="hover:text-green-600 transition">Account</Link></li>
          <li><Link to="/about" className="hover:text-green-600 transition">About</Link></li>
          <li><Link to="/login" className="hover:text-green-600 transition">Login</Link></li>
          <li>
            <Link
              to="/signup"
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-full transition text-xs font-medium shadow-sm">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
