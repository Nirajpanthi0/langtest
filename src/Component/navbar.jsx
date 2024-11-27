import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Scroll event listener to change navbar background color
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`p-4 text-white flex justify-between shadow-lg fixed top-0 left-0 w-full z-50 items-center transition-colors duration-300 ${
                isScrolled ? 'bg-blue-400' : 'bg-blue-700'
            }`}
        >
            {/* Logo */}
            <div className="text-2xl font-bold hover:text-blue-300 transition duration-300 cursor-pointer md:text-3xl md:ml-64">
                LangTest
            </div>

            {/* Hamburger Icon (visible only on small screens) */}
            <div className="md:hidden cursor-pointer text-3xl" onClick={toggleMobileMenu}>
                ☰
            </div>

            {/* Links (desktop view) */}
            <div className="hidden md:flex gap-6 text-lg items-center justify-evenly space-x-12 md:mr-44">
                <Link to="/" className="hover:text-blue-300 transition duration-300">Home</Link>
                <Link to="/about" className="hover:text-blue-300 transition duration-300">About Us</Link>
                <Link to="/contact" className="hover:text-blue-300 transition duration-300">Contact</Link>
                <Link to="/taketest" className="hover:text-blue-300 transition duration-300">Take Test</Link>
                <button className="bg-blue-600 rounded p-2 shadow-2xl">
                    <Link to="/login" className="hover:text-blue-300 transition duration-300">Login</Link>
                </button>
            </div>

            {/* Mobile Menu (only visible when the state is set to open) */}
            <div
                className={`md:hidden fixed top-0 left-0 w-full h-full bg-blue-600 text-white transform ${
                    isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                } transition-transform duration-300 ease-in-out p-6 space-y-6`}
            >
                <button
                    onClick={toggleMobileMenu}
                    className="text-3xl font-semibold self-end mb-4 hover:text-blue-300 transition duration-300 bg-blue-900 rounded-full"
                >
                    ✕
                </button>
                <Link to="/" onClick={closeMobileMenu} className="hover:text-blue-300 transition duration-300 block text-xl">Home</Link>
                <Link to="/about" onClick={closeMobileMenu} className="hover:text-blue-300 transition duration-300 block text-xl">About Us</Link>
                <Link to="/contact" onClick={closeMobileMenu} className="hover:text-blue-300 transition duration-300 block text-xl">Contact</Link>
                <Link to="/taketest" onClick={closeMobileMenu} className="hover:text-blue-300 transition duration-300 block text-xl">Take Test</Link>
                <Link to="/login" onClick={closeMobileMenu} className="hover:text-blue-300 transition duration-300 block text-xl">Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;
