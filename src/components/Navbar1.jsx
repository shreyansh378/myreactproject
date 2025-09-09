import React, { useState } from 'react';

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Welcome Jii</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="about" className='hover : text-gary-300'>About Us</a>
          <a href="service" className="hover:text-gray-300">Services</a>
          <a href="contact" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="/" className="block hover:text-gray-300">Home</a>
          <a href="#" className="block hover:text-gray-300">About</a>
          <a href="#" className="block hover:text-gray-300">Services</a>
          <a href="#" className="block hover:text-gray-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar1;
