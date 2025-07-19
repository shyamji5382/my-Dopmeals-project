
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="footer-content flex flex-wrap justify-around max-w-6xl mx-auto px-4">
        <div className="footer-section flex-1 min-w-[250px] m-4 text-left">
          <h3 className="text-xl font-semibold text-green-500 mb-4">About Dopameal</h3>
          <p className="text-gray-400 text-sm">Your personal guide to a healthier, happier life through mindful eating.</p>
        </div>
        <div className="footer-section flex-1 min-w-[250px] m-4 text-left">
          <h3 className="text-xl font-semibold text-green-500 mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><Link to="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
            <li className="mb-2"><Link to="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
            <li className="mb-2"><Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section flex-1 min-w-[250px] m-4 text-left">
          <h3 className="text-xl font-semibold text-green-500 mb-4">Follow Us</h3>
          <div className="social-icons flex space-x-4">
            <a href="https://www.facebook.com/shyamji5382/" className="text-gray-400 text-2xl transition duration-300"><i className="fab fa-facebook"></i></a>
            <a href="https://x.com/ShyamjiPat50596?t=2fpB0nmCfFuUZmLegdhMhQ&s=08" className="text-gray-400 text-2xl transition duration-300"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/shyamji5382/" className="text-gray-400 text-2xl transition duration-300"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <p className="footer-bottom mt-10 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">&copy; 2025 Dopameal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
