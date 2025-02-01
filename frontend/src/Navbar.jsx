import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();
  const rightNav = [
    { name: 'Brand', to: '/' },
    { name: 'Home', to: '/home' },
    { name: 'Menu', to: '/menu' },
    { name: 'About', to: '/about' }
  ];

  const leftNav = [
    { name: 'Contact', to: '/contact' },
    { name: 'Sign Up', to: '/signup' },
    { name: 'Log in', to: '/login' }
  ];

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex justify-between p-5 items-center cursor-pointer bg-gray-100 shadow-md sticky top-0 z-10'>
      {/* Right Navigation (with Brand always visible on all screen sizes) */}
      <ul className='flex gap-10 text-xl items-center'>
        {rightNav.map((item, index) => (
          <div className={item.name !== 'Brand' ? 'hidden lg:block' : ''}>
              <li key={index} className={item.name === 'Brand' ? 'font-bold text-4xl' : location.pathname === item.to  ? 'text-[#8B4513] font-semibold' : 'hover:text-[#8B4513]'}>
              <Link to={item.to}>{item.name}</Link>
              </li>
          </div>
        ))}
      </ul>

      {/* Hamburger Icon for small screens */}
      <button onClick={toggleMenu} className='lg:hidden flex items-center text-3xl'>
        ☰
      </button>

      {/* Mobile Menu (Left and Right Nav items) */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-gray-100 p-5`}>
        <ul className="flex flex-col gap-5 text-xl items-center">
          {/* RightNav */}
          {rightNav.map((item, index) => (
            <li key={index} className={item.name === 'Brand' ? 'hidden' : ''}>
              <Link to={item.to} onClick={() => setIsOpen(false)}>{item.name}</Link>
            </li>
          ))}

          {/* LeftNav */}
          {leftNav.map((item, index) => (
            <li key={index} className='hover:text-[#8B4513]'>
              <Link to={item.to} onClick={() => setIsOpen(false)}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Left Navigation (visible on larger screens) */}
      <div className='hidden lg:block'>
        <ul className='flex gap-10 text-xl items-center'>
          {leftNav.map((item, index) => (
            <li key={index} className={item.name === 'Contact' ? 
                  'border-black px-6 py-1 bg-black text-white rounded-3xl hover:text-black hover:bg-white transition duration-300 ease-in-out' 
                  : location.pathname === item.to  ? 'text-[#8B4513] font-semibold'
                  : 'hover:text-[#8B4513]'}>
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
