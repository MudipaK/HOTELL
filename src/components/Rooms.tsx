'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const rooms = [
  {
    id: 1,
    name: 'Luxury Suite',
    description: 'Spacious suite with panoramic views and premium amenities',
    price: '$299/night',
    image: '/Luxury hotel room.jpg',
  },
  {
    id: 2,
    name: 'Executive Room',
    description: 'Modern room with work space and city views',
    price: '$199/night',
    image: '/The hotel room.jpg',
  },
  {
    id: 3,
    name: 'Deluxe Room',
    description: 'Comfortable room with all essential amenities',
    price: '$149/night',
    image: '/haal2.jpg',
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Rooms</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={room.image}
                  alt={room.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-[#800020]">{room.price}</span>
                  <button className="bg-[#800020] text-white px-4 py-2 rounded-md hover:bg-[#600018] transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
