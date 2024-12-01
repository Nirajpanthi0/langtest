import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaClipboardList } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Detect if the scroll is greater than 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-4 flex justify-between items-center  fixed top-0 left-0 w-full z-50 transition-all duration-300  // Light blue on scroll, dark blue otherwise
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-black ml-4 md:ml-10">
        Lang<span className="text-blue-600">Test</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8  px-6 py-2 rounded-full bg-black   ">
        <Link
          to="/"
          className="flex items-center gap-2 text-white font-medium hover:text-gray-600 transition"
        >
          <FaHome />
          Home
        </Link>
        <Link
          to="/about"
          className="flex items-center gap-2 text-white font-medium hover:text-gray-600 transition"
        >
          <FaInfoCircle />
          About
        </Link>
        <Link
          to="/contact"
          className="flex items-center gap-2 text-white font-medium hover:text-gray-600 transition"
        >
          <FaPhoneAlt />
          Contact
        </Link>
        <Link
          to="/taketest"
          className="flex items-center gap-2 text-white font-medium hover:text-gray-600transition"
        >
          <FaClipboardList />
          Test
        </Link>
      </div>

      {/* Login Button */}
      <div className="hidden md:block mr-4 md:mr-10">
        <Link
          to="/login"
          className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-700 transition"
        >
          Login
        </Link>
      </div>

      {/* Mobile Hamburger Icon */}
      <div
        className="md:hidden text-black text-3xl cursor-pointer mr-4"
        onClick={toggleMobileMenu}
      >
        ☰
      </div> 

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white text-black transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 p-6`}
      >
        <button
          className="text-3xl font-bold hover:text-blue-300 transition mb-6"
          onClick={closeMobileMenu}
        >
          ✕
        </button>
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="block text-xl font-medium mb-4 hover:text-blue-300 transition"
        >
          <FaHome className="inline mr-2" />
          Home
        </Link>
        <Link
          to="/about"
          onClick={closeMobileMenu}
          className="block text-xl font-medium mb-4 hover:text-blue-300 transition"
        >
          <FaInfoCircle className="inline mr-2" />
          About
        </Link>
        <Link
          to="/contact"
          onClick={closeMobileMenu}
          className="block text-xl font-medium mb-4 hover:text-blue-300 transition"
        >
          <FaPhoneAlt className="inline mr-2" />
          Contact
        </Link>
        <Link
          to="/taketest"
          onClick={closeMobileMenu}
          className="block text-xl font-medium mb-4 hover:text-blue-300 transition"
        >
          <FaClipboardList className="inline mr-2" />
          Test
        </Link>
        <Link
          to="/login"
          onClick={closeMobileMenu}
          className="block text-xl font-medium bg-blue-500 rounded-full px-4 py-2 text-center mt-4 hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
