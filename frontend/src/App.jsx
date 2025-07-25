import { useState } from 'react';
import './index.css'
import { Navbar, Hero, FeaturedTrips, Popular_Destinations, Footer } from './components';


const App = ()=> { 
  

  return (
    <div className='position: relative'>
      <Navbar/>
      <Hero/>
      <Popular_Destinations/>
      <FeaturedTrips />
      <Footer />
    </div>
  )
}

export default App
