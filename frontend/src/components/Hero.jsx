import React from 'react';
import heroBg from '../assets/herobg.jpg';
import SearchBar from './SearchBar'; 

const Hero = () => {
  return (
    
    <div
      className="relative h-screen bg-cover bg-center flex items-start px-8"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      
      <div className="absolute inset-0 bg-black/10"></div>
      
    
      <div className="relative z-10 text-center text-black p-4 pt-40 md:pt-48">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg md:text-xl  font-semibold">
          Curated trips by trusted agents. Book with confidence, travel with joy.
        </p>
        <div className="mt-20 ">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;