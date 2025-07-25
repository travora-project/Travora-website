import React, { useState } from "react";
import { BellIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLink from "./Navlink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 bg-transparent">
      {/* Removed max-w-7xl and mx-auto to reduce side gaps */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex gap-3 cursor-pointer items-center">
            <img
              src="src/assets/logo.png"
              alt="Travora Logo"
              className="w-12 h-12 md:w-[75px] md:h-[69px]"
            />
            <div className="text-[#0057D8] text-2xl md:text-[28px] font-semibold">
              Travora
            </div>
          </div>

          <ul className="hidden md:flex list-none gap-8 cursor-pointer text-[24px] text-black">
            {/* <li className='hover:underline'>Home</li> */}
            
              <NavLink> Home </NavLink>
              <NavLink> Special Trips </NavLink>
              <NavLink> Community </NavLink>

          </ul>

          <div className="hidden md:flex items-center gap-4">
            <BellIcon
              className="h-6 w-6 cursor-pointer text-black"
              aria-hidden="true"
            />
            <button className="rounded-xl bg-orange-500 cursor-pointer text-white border-black border-2 px-4 py-2 hover:bg-orange-600">
              My profile
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/20 backdrop-blur-md">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <li className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">
              Home
            </li>
            <li className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">
              Special Trips
            </li>
            <li className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">
              Community
            </li>
            <li className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">
              My Profile
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
