import React from 'react';

const NavLink = ({ children }) => {
  return (
    // This li contains the reusable hover effect logic
    <li className='relative group cursor-pointer'>
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
    </li>
  );
};

export default NavLink;
