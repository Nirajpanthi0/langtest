import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo and Company Name Section */}
        <div className="flex items-center justify-center md:justify-start md:mr-24">
          <img 
            src="/path-to-your-logo.png" // Replace with your logo path
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16 mr-4" // Adjust size for responsiveness
          />
          <h2 className="text-xl md:text-2xl font-semibold">Your Company Name</h2>
        </div>
        
        {/* Quick Links Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Contact Information Section */}
        <div className="md:ml-20">
          <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
          <p>Address: 1234 Language St, City, Country</p>
          <p>Email: contact@company.com</p>
          <p>Phone: (123) 456-7890</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-white hover:text-blue-300"><FaFacebook size={24} /></a>
            <a href="#" className="text-white hover:text-blue-300"><FaTwitter size={24} /></a>
            <a href="#" className="text-white hover:text-blue-300"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
