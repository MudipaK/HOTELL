'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#F9F9F9]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-[#800020]">About Us</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <Image
                src="/487389806_1096923699120530_5702554477242212316_n.jpg"
                alt="Sangria Grand Hotel Exterior"
                className="object-cover w-full h-full"
                layout="fill"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] p-4 rounded-lg shadow-lg">
              <p className="text-white text-lg font-bold">Since 2010</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#800020] mb-4">
              Experience Luxury & Elegance
            </h3>
            <p className="text-gray-600 mb-6">
              Nestled in the heart of Middeniya, Sangria Grand Hotel offers an unparalleled experience of luxury and comfort. Our commitment to excellence and attention to detail ensures that every moment spent with us is truly special.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you&apos;re planning a grand wedding, a corporate event, or simply seeking a luxurious getaway, our dedicated team is here to make your experience unforgettable.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="text-[#D4AF37] mr-2">✓</span>
                <span>Luxury Accommodation</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#D4AF37] mr-2">✓</span>
                <span>Premium Catering</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#D4AF37] mr-2">✓</span>
                <span>Elegant Venues</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#D4AF37] mr-2">✓</span>
                <span>Professional Staff</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
