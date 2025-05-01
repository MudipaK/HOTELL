'use client';

import { motion } from 'framer-motion';
import { FaGlassCheers, FaUtensils, FaBed, FaConciergeBell } from 'react-icons/fa';

const services = [
  {
    icon: <FaGlassCheers className="w-12 h-12 text-[#D4AF37]" />,
    title: 'Wedding Hall',
    description: 'Elegant wedding venues with customizable setups, perfect for creating unforgettable memories.',
  },
  {
    icon: <FaUtensils className="w-12 h-12 text-[#D4AF37]" />,
    title: 'Catering Services',
    description: 'Exquisite culinary experiences with a diverse menu prepared by our expert chefs.',
  },
  {
    icon: <FaBed className="w-12 h-12 text-[#D4AF37]" />,
    title: 'Luxury Rooms',
    description: 'Spacious and beautifully appointed rooms designed for ultimate comfort and relaxation.',
  },
  {
    icon: <FaConciergeBell className="w-12 h-12 text-[#D4AF37]" />,
    title: 'Restaurant',
    description: 'Fine dining experience with a curated menu of local and international cuisine.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-[#800020]">Our Services</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:border-[#D4AF37] border-2 border-transparent transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#800020] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 
