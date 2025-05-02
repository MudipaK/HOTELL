'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Image from 'next/image';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-[#800020]">Contact Us</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-[#D4AF37] mt-1">
                  <FaPhone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#800020]">Phone</h3>
                  <p className="text-gray-600">+94 71 845 7378</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-[#D4AF37] mt-1">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#800020]">Email</h3>
                  <p className="text-gray-600">ggjagathnanda@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-[#D4AF37] mt-1">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#800020]">Address</h3>
                  <p className="text-gray-600">Katuwana Road, Middeniya, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-[#D4AF37] mt-1">
                  <FaClock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#800020]">Opening Hours</h3>
                  <p className="text-gray-600">Always Open</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-[#800020] mb-4">Facilities</h3>
              <div className="flex space-x-4">
                <span className="bg-[#F9F9F9] px-4 py-2 rounded-md">Dine-in</span>
                <span className="bg-[#F9F9F9] px-4 py-2 rounded-md">Outdoor seating</span>
              </div>
            </div>

         
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <Image
              src="/contact.jpg"
              alt="Contact Wedding"
              className="rounded-3xl shadow-2xl border-4 border-[#D4AF37]/40 max-w-md w-full object-cover object-center bg-white/60 backdrop-blur-md"
              width={500}
              height={500}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
