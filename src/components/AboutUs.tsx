'use client';

import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          {/* Removed image here */}

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Sangria Grand Hotel</h2>
            <p className="text-gray-600 mb-6">
              Welcome to Sangria Grand Hotel, where luxury meets comfort. Our hotel has been serving guests with exceptional hospitality since 1995. Located in the heart of the city, we offer a perfect blend of modern amenities and traditional elegance.
            </p>
            <p className="text-gray-600 mb-6">
              Our commitment to excellence has earned us numerous awards and recognition in the hospitality industry. We take pride in providing our guests with an unforgettable experience, whether they're here for business or leisure.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#800020] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">25+</span>
                </div>
                <div>
                  <h3 className="font-semibold">Years of Excellence</h3>
                  <p className="text-sm text-gray-600">Since 1995</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#800020] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">200+</span>
                </div>
                <div>
                  <h3 className="font-semibold">Luxury Rooms</h3>
                  <p className="text-sm text-gray-600">Available</p>
                </div>
              </div>
            </div>
            <button className="bg-[#800020] text-white px-6 py-3 rounded-md hover:bg-[#600018] transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 
