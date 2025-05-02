'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  {
    id: 1,
    src: '/buffet.jpg',
    alt: 'Buffet Setup',
  },
  {
    id: 2,
    src: '/haal2.jpg',
    alt: 'Wedding Hall 2',
  },
  {
    id: 3,
    src: '/hall.jpg',
    alt: 'Main Wedding Hall',
  },
  {
    id: 4,
    src: '/How To Set Up A Buffet.jpg',
    alt: 'How To Set Up A Buffet',
  },
  {
    id: 5,
    src: '/Luxury hotel room.jpg',
    alt: 'Luxury Hotel Room',
  },
  {
    id: 6,
    src: '/The hotel room.jpg',
    alt: 'The Hotel Room',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Rooftop Pool',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Conference Hall',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Garden View',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Lobby Bar',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Fitness Center',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Business Center',
  }
];

const ImageGallery = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery; 
