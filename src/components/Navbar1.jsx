import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">

        {/* Top Navbar */}
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold">
            Welcome Jii
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">

            <Link
              to="/"
              className="hover:text-gray-300 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-gray-300 transition"
            >
              About Us
            </Link>

            <Link
              to="/service"
              className="hover:text-gray-300 transition"
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="hover:text-gray-300 transition"
            >
              Contact
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 border-t border-blue-500 pt-3">

            <div className="flex flex-col space-y-2">

              <Link
                to="/"
                onClick={closeMenu}
                className="px-3 py-2 hover:bg-blue-700 rounded"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="px-3 py-2 hover:bg-blue-700 rounded"
              >
                About Us
              </Link>

              <Link
                to="/service"
                onClick={closeMenu}
                className="px-3 py-2 hover:bg-blue-700 rounded"
              >
                Services
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="px-3 py-2 hover:bg-blue-700 rounded"
              >
                Contact
              </Link>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar1;