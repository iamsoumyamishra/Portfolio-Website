'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Tektur } from 'next/font/google';

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/experience', label: 'Experience' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className={` text-xl font-bold ${tektur.className} text-gray-800 group-hover:text-blue-600 transition-colors duration-300 `}>
                Soumya Mishra
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Resume
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Animated hamburger icon */}
              <div className="relative w-6 h-6">
                <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}></span>
                <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute top-5 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-lg">
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 transform ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Mobile CTA Button */}
            <div className="pt-4">
              <Link
                href="/Resume.pdf"
                className={`block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-4 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg transform ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${navItems.length * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;