
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-4">
        <Link to="/" className="logo flex items-center text-2xl font-bold text-green-600">
          <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/80032314-4a54-4a20-b14e-a4eee1d848f2.png" alt="Dopameal Logo" className="h-10 w-10 mr-2 rounded-full shadow-sm" />
          Dopameal
        </Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-gray-600 hover:text-green-600 transition duration-300 font-medium">Home</Link></li>
          <li><Link to="/contact" className="text-gray-600 hover:text-green-600 transition duration-300 font-medium">Contact Us</Link></li>
          <li><Link to="/account" className="text-gray-600 hover:text-green-600 transition duration-300 font-medium">Account</Link></li>
          <li><Link to="/about" className="text-gray-600 hover:text-green-600 transition duration-300 font-medium">About Us</Link></li>
          <li><Link to="/login" className="text-gray-600 hover:text-green-600 transition duration-300 font-medium">Login</Link></li>
          <li><Link to="/signup" className="signup-btn bg-green-500 text-white px-5 py-2 rounded-full font-semibold shadow-md transition duration-300 ease-in-out">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
