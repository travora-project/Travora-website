import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Maldivesimg from '../assets/Maldives.jpg'
import Thailandimg from '../assets/Thailand.jpg'
import Rajasthanimg from '../assets/Rajasthan.jpg'

// Data for the trip cards - you can replace this with data from an API
const featuredTrips = [
  {
    id: 1,
    location: 'Romantic Maldives',
    title: 'Romantic Maldives Escape',
    duration: '4 nights / 5 Days',
    price: '25,000',
    image: Maldivesimg,
    tagColor: 'bg-blue-500',
  },
  {
    id: 2,
    location: 'Royal Rajasthan',
    title: 'Royal Rajasthan Tour',
    duration: '7 nights / 8 Days',
    price: '25,000',
    image: Rajasthanimg,
    tagColor: 'bg-yellow-500',
  },
  {
    id: 3,
    location: 'Exotic Thailand',
    title: 'Exotic Thailand Fun',
    duration: '5 nights / 6 Days',
    price: '25,000',
    image: Thailandimg,
    tagColor: 'bg-green-500',
  },
];

// Reusable Trip Card Component
const TripCard = ({ trip }) => (
  <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <div className="relative">
      <img src={trip.image} alt={trip.title} className="w-full h-56 object-cover" />
      <div className={`absolute top-4 left-4 text-white text-sm font-semibold px-3 py-1 rounded-full ${trip.tagColor}`}>
        {trip.location}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{trip.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{trip.duration}</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-xs">Starts from</p>
          <p className="text-2xl font-bold text-gray-900">₹{trip.price}</p>
        </div>
        <button className="text-gray-400 p-3 rounded-full hover:bg-gray-100">
          <EnvelopeIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="mt-6">
        <button className="w-full border border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded-xl hover:bg-blue-500 hover:text-white transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  </div>
);

const FeaturedTrips = () => {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Featured Trips</h2>
          <p className="text-gray-600 mt-2">Explore places that travelers love the most.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12">
          <button className="bg-blue-100 text-blue-700 font-semibold py-2 px-5 rounded-full text-sm hover:bg-blue-200">Adventure</button>
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-5 rounded-full text-sm hover:bg-gray-300">Luxury</button>
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-5 rounded-full text-sm hover:bg-gray-300">Budget</button>
          <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-5 rounded-full text-sm hover:bg-gray-300">All-Girls</button>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTrips;
