// src/components/PopularDestinations.js

import React from 'react';
import keralaImg from '../assets/kerela.png';
import ladakhImg from '../assets/Ladakh.png';
import goaImg from '../assets/Goa.jpg';
import manaliImg from '../assets/Manali.jpg';

const destinations = [
  {
    name: 'Kerala',
    image: keralaImg,
  },
  {
    name: 'Ladakh',
    image: ladakhImg,
  },
  {
    name: 'Goa',
    image: goaImg,
  },
  {
    name: 'Manali',
    image: manaliImg,
  },
];

const DestinationCard = ({ destination }) => (
  <div className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
    <img 
      src={destination.image} 
      alt={destination.name} 
      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
    />
    
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    <h3 className="absolute bottom-5 left-5 text-white text-2xl font-bold">
      {destination.name}
    </h3>
  </div>
);


const PopularDestinations = () => {
  return (
    
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Popular Destinations</h2>
          <p className="text-gray-600 mt-2">Explore places that travelers love the most.</p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <DestinationCard key={dest.name} destination={dest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
