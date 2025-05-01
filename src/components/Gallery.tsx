'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3',
    alt: 'Wedding Hall Setup',
    category: 'wedding'
  },
  {
    src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3',
    alt: 'Luxury Room',
    category: 'rooms'
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3',
    alt: 'Fine Dining',
    category: 'restaurant'
  },
  {
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3',
    alt: 'Wedding Reception',
    category: 'wedding'
  },
  {
    src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3',
    alt: 'Suite Room',
    category: 'rooms'
  },
  {
    src: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3',
    alt: 'Gourmet Cuisine',
    category: 'restaurant'
  }
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all'
    ? images
    : images.filter(img => img.category === activeCategory);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="gallery" className="py-20 bg-[#F9F9F9]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-[#800020]">Our Gallery</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8" />
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {['all', 'wedding', 'rooms', 'restaurant'].map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === category
                  ? 'bg-[#800020] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
          >
            <img
              src={filteredImages[currentIndex].src}
              alt={filteredImages[currentIndex].alt}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
          >
            <FaChevronLeft className="w-6 h-6 text-[#800020]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
          >
            <FaChevronRight className="w-6 h-6 text-[#800020]" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
