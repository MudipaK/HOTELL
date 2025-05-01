'use client';

import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center pt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center mb-8"
            >
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-[1.1]">
                <span className="font-serif text-[#D4AF37]">Elegance</span>
                <br />
                <span className="font-light">Redefined</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                Where dreams become reality and love stories begin. Experience the perfect blend of luxury and romance at Sangria Grand Hotel.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="group inline-flex items-center justify-center bg-[#800020] text-white px-12 py-6 rounded-full text-lg hover:bg-[#600018] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="relative">
                    Plan Your Wedding
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                  </span>
                  <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Venue Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <h3 className="text-3xl font-serif text-[#D4AF37] mb-2">300+</h3>
                <p className="text-white/80">Guest Capacity</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-serif text-[#D4AF37] mb-2">5</h3>
                <p className="text-white/80">Luxury Venues</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-serif text-[#D4AF37] mb-2">24/7</h3>
                <p className="text-white/80">Event Support</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
