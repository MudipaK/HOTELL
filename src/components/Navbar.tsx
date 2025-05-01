'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group">
            <motion.span
              className="text-2xl font-serif text-white"
              whileHover={{ scale: 1.05 }}
            >
              Sangria Grand
            </motion.span>
            <div className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-12 mr-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group"
                >
                  <motion.span
                    className="text-white/90 hover:text-white text-sm tracking-wider transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                  </motion.span>
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#800020] text-white px-8 py-2.5 rounded-full text-sm tracking-wider hover:bg-[#600018] transition-colors"
            >
              Book Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-white/90 hover:text-white text-sm tracking-wider transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="#contact"
              className="block w-full bg-[#800020] text-white px-6 py-3 rounded-full text-sm tracking-wider hover:bg-[#600018] transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 
