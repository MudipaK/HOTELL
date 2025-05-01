'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Sangria Grand</h3>
            <p className="text-gray-300">
              Experience luxury and elegance at Sangria Grand Hotel, where every moment becomes a cherished memory.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#D4AF37]">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Katuwana Road, Middeniya</li>
              <li>Sri Lanka</li>
              <li>+94 71 845 7378</li>
              <li>ggjagathnanda@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-[#D4AF37]">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sangria Grand Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
