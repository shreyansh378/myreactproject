import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer1 = () => {
  return (
   
    <footer className="bg-gray-900 text-white py-4 px-6 md:px-10">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4 ">
        {/* Logo / Brand */}
        <div>
          <h2 className="text-2xl font-bold mt-2 mb-4">TastyBites 🍴</h2>
          <p>Delicious meals delivered to your door. Fast, fresh, and affordable.</p>
          
          <div className='text-bold text-amber-50'>
            Developer - Shreyansh Srivastava
            </div>
        </div>
   
     

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">Menu</a></li>
            <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
      <p className="mb-2">Phone: <a href="tel:+917880990169" className="text-yellow-400 hover:underline">+91 7880990169
        </a>
        </p>

      <p>Email: <a href="mailto:info@foodsite.com" className="text-yellow-400 hover:underline">info@foodsite.com</a></p>
      <p>Address: 123 Food Street, New Delhi, India</p>
    </div>
 

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10 border-t border-gray-700 pt-6 text-sm">
        © {new Date().getFullYear()} TastyBites. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer1;
