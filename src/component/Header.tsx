// src/component/Header.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';  // Import the cart icon from FontAwesome

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-white text-2xl font-bold">Laptop World</h1>
        
        {/* Mobile Menu Button */}
        <button 
          className="text-white md:hidden" 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-400">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-400">About</Link>
          <Link href="/laptop" className="text-white hover:text-gray-400">Laptop</Link>
          <Link href="/Contact" className="text-white hover:text-gray-400">Contact</Link>
        </div>
        
        {/* Cart Icon */}
        <div className="relative">
          <button className="text-white">
            <FaShoppingCart className="w-6 h-6" />  {/* Use FaShoppingCart */}
          </button>
          {/* Cart Item Count (Optional) */}
          
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-700 p-4`}
      >
        <Link href="/" className="block text-white py-2">Home</Link>
        <Link href="/about" className="block text-white py-2">About</Link>
        <Link href="/laptop" className="block text-white py-2">Laptop</Link>
        <Link href="/Contact" className="block text-white py-2">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;

