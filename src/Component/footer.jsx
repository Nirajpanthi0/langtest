import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 mt-40 border-t-8 border-gray-900">
      <div className="flex flex-col md:flex-row justify-between text-white px-6 md:px-12">
        {/* Latest Section */}
        <h1 className="text-white text-3xl sm:text-4xl mb-6 font-semibold">
          Lang<span className='text-blue-400'>Test</span>
        </h1>

        {/* Links Section */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-200">Links</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400 text-base sm:text-lg">Home</a></li>
            <li><a href="#" className="hover:text-gray-400 text-base sm:text-lg">About</a></li>
            <li><a href="#" className="hover:text-gray-400 text-base sm:text-lg">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-400 text-base sm:text-lg">Test</a></li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-200">Get in touch</h3>
          <div className="flex space-x-4">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={22} className="text-gray-300 hover:text-red-600" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={22} className="text-gray-300 hover:text-red-600" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={22} className="text-gray-300 hover:text-red-600" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={22} className="text-gray-300 hover:text-red-600" />
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-200">Contact us</h3>
          <button className="border-4 border-white rounded-3xl text-xl sm:text-2xl px-6 py-2 text-white bg-transparent hover:bg-gray-700">
            Email
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
