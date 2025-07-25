// src/components/Footer.js

import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

// SVG Icons for social media - a professional way to handle simple icons
const YouTubeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.802 5.802a2.5 2.5 0 00-1.767-1.768C16.53 3.5 12 3.5 12 3.5s-4.53 0-6.035.534a2.5 2.5 0 00-1.768 1.768C3.5 7.47 3.5 12 3.5 12s0 4.53.7 6.198a2.5 2.5 0 001.768 1.768C7.47 20.5 12 20.5 12 20.5s4.53 0 6.035-.534a2.5 2.5 0 001.768-1.768C20.5 16.53 20.5 12 20.5 12s0-4.53-.698-6.198zM9.5 15.5V8.5l6 3.5-6 3.5z" clipRule="evenodd" />
  </svg>
);

const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

const TwitterIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
);

const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zm-1.161 1.545a3.237 3.237 0 01-2.43.96c-1.773 0-3.225-1.452-3.225-3.225 0-1.092.55-2.058 1.4-2.655a4.93 4.93 0 01-1.15-1.772c-.247-.636-.416-1.363-.465-2.427C3.013 9.53 3 9.884 3 12.315s.013 2.784.06 3.808c.049 1.064.218 1.791.465 2.427a4.93 4.93 0 011.15 1.772c.636.247 1.363.416 2.427.465 1.024.048 1.378.06 3.808.06s2.784-.013 3.808-.06c1.064-.049 1.791-.218 2.427-.465a4.93 4.93 0 011.15-1.772c.636-.247 1.363-.416 2.427-.465 1.024-.048 1.378-.06 3.808-.06s2.784.013 3.808.06c.049 1.064.218 1.791.465 2.427a4.93 4.93 0 011.15 1.772c.636.247 1.363.416 2.427.465 1.024.048 1.378.06 3.808.06s2.784-.013 3.808-.06c1.064-.049 1.791-.218 2.427-.465a4.93 4.93 0 011.15-1.772c.636-.247 1.363-.416 2.427-.465 1.024.048 1.378.06 3.808.06s2.784-.013 3.808-.06c.049-1.064.218-1.791.465-2.427a4.93 4.93 0 011.15-1.772c.636-.247 1.363-.416 2.427-.465C21.987 14.47 22 14.116 22 11.685s-.013-2.784-.06-3.808c-.049-1.064-.218-1.791-.465-2.427a4.93 4.93 0 01-1.15-1.772c-.636-.247-1.363-.416-2.427-.465C14.47 3.013 14.116 3 11.685 3zm-1.161 1.545a3.237 3.237 0 01-2.43.96c-1.773 0-3.225-1.452-3.225-3.225 0-1.092.55-2.058 1.4-2.655a4.93 4.93 0 01-1.15-1.772c-.247-.636-.416-1.363-.465-2.427C3.013 9.53 3 9.884 3 12.315s.013 2.784.06 3.808c.049 1.064.218 1.791.465 2.427a4.93 4.93 0 011.15 1.772c.636.247 1.363.416 2.427.465 1.024.048 1.378.06 3.808.06s2.784-.013 3.808-.06c1.064-.049 1.791-.218 2.427-.465a4.93 4.93 0 011.15-1.772c.636-.247 1.363-.416 2.427-.465 1.024.048 1.378.06 3.808.06s2.784-.013 3.808-.06c.049 1.064.218 1.791.465 2.427a4.93 4.93 0 011.15 1.772c.636-.247 1.363-.416 2.427-.465 1.024.048 1.378.06 3.808.06s2.784-.013 3.808-.06c.049-1.064.218-1.791.465-2.427a4.93 4.93 0 011.15-1.772c-.636-.247-1.363-.416-2.427-.465C14.47 3.013 14.116 3 11.685 3z" clipRule="evenodd" />
    </svg>
);

const LinkedInIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Logo and Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            {/* You can replace this with your actual logo component or image */}
            <span className="text-3xl font-bold text-white">Travora</span>
          </div>
          <form className="flex w-full md:w-auto">
            <div className="relative flex-grow">
              <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="email" 
                placeholder="Enter your email to get the latest news..." 
                className="bg-gray-700 w-full pl-10 pr-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
            </div>
            <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          {/* Explore Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Destinations</a></li>
              <li><a href="#" className="hover:text-white">Trip Types</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
            </ul>
          </div>
          {/* Support Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Terms Of Services</a></li>
            </ul>
          </div>
          {/* Available On & Join Us Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Available on</h3>
            <div className="flex flex-col space-y-2 mb-6">
                {/* Replace with your actual App Store images */}
                <img src="https://placehold.co/120x40/000000/ffffff?text=App+Store" alt="App Store" className="h-10 w-auto" />
                <img src="https://placehold.co/120x40/000000/ffffff?text=Google+Play" alt="Google Play" className="h-10 w-auto" />
            </div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Join Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><YouTubeIcon /></a>
              <a href="#" className="hover:text-white"><FacebookIcon /></a>
              <a href="#" className="hover:text-white"><TwitterIcon /></a>
              <a href="#" className="hover:text-white"><InstagramIcon /></a>
              <a href="#" className="hover:text-white"><LinkedInIcon /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">&copy; 2025 CompanyName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
