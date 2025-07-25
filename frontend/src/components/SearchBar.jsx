// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import CustomDatePicker from './CustomDatePicker';

const SearchBar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    // Increased max-width and adjusted padding to py-3 and px-6
    <div className="bg-white/80 backdrop-blur-md py-3 px-6 rounded-full shadow-lg flex items-center w-full max-w-2xl mx-auto">
      
      {/* Destination Input */}
      <div className="flex-grow pl-4">
        <label htmlFor="destination" className="sr-only">Destination Name</label>
        <input
          type="text"
          id="destination"
          placeholder="Destination Name"
          // Kept font size large for readability
          className="w-full bg-transparent focus:outline-none text-lg text-gray-800 placeholder-gray-500"
        />
      </div>

      {/* Vertical Divider */}
      <div className="h-8 w-px bg-gray-300 mx-4"></div>

      {/* The CustomDatePicker component */}
      <div className="flex items-center w-40 text-lg">
        <CustomDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>

      {/* Search Button - reduced padding to match height */}
      <button className="ml-4 bg-white p-3 rounded-full shadow hover:bg-gray-100 transition-colors duration-300">
        <span className="sr-only">Search</span>
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-700" />
      </button>
    </div>
  );
};

export default SearchBar;
