import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import image from '../assets/NB_Monogram_Logo-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='flex justify-between items-center w-[90%] p-1 mt-6 bg-white rounded-lg mx-auto'>
        {/* Logo */}
        <img src={image} alt="logo" className='w-[6%] ml-10 ' />

        {/* Desktop Menu */}
        <div className='hidden md:flex'>
          <ul className='flex gap-10 mr-20'>
            <ScrollLink to="home" smooth={true} duration={2000}>
              <li className=' text-slate-600 font-bold text-2xl transition-all ease-in-out hover:scale-110 cursor-pointer'>Home</li>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={2000}>
              <li className=' text-slate-600 font-bold text-2xl transition-all ease-in-out hover:scale-110 cursor-pointer'>About</li>
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={2000}>
              <li className=' text-slate-600 font-bold text-2xl transition-all ease-in-out hover:scale-110 cursor-pointer'>Skills</li>
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={2000}>
              <li className=' text-slate-600 font-bold text-2xl transition-all ease-in-out hover:scale-110 cursor-pointer'>Projects</li>
            </ScrollLink>
            
            <ScrollLink to="contact" smooth={true} duration={2000}>
              <li className='text-slate-600 font-bold text-2xl transition-all ease-in-out hover:scale-110 cursor-pointer'>
                Contact
              </li>
            </ScrollLink>

          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <FontAwesomeIcon icon={faXmark} size="lg" className='cursor-pointer' />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" className='cursor-pointer' />
            )}
          </button>
        </div>
      </div>

  );
}

export default Navbar;
