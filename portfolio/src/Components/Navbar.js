import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import image from '../assets/NB_Monogram_Logo-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='flex justify-between items-center w-[90%] p-1 mt-6 bg-white rounded-lg mx-auto relative'>
      {/* Logo */}
      <img src={image} alt="logo" className='w-[6%] ml-10' />

      {/* Desktop Menu */}
      <div className='hidden md:flex'>
        <ul className='flex gap-10 mr-20'>
          {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
            <ScrollLink key={section} to={section} smooth={true} duration={1000}>
              <li className='text-slate-600 font-bold text-2xl transition-all ease-in-out hover:scale-110 cursor-pointer capitalize'>
                {section}
              </li>
            </ScrollLink>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden flex items-center'>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <FontAwesomeIcon icon={faXmark} size="lg" className='cursor-pointer mr-5' />
          ) : (
            <FontAwesomeIcon icon={faBars} size="lg" className='cursor-pointer mr-5' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className='md:hidden absolute top-full right-0 w-full bg-white rounded-lg shadow-lg mt-2'>
          <ul className='flex flex-col items-center gap-6 py-4'>
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
              <ScrollLink key={section} to={section} smooth={true} duration={1000} onClick={() => setToggle(false)}>
                <li className='text-slate-600 font-bold text-xl hover:scale-110 transition-all capitalize'>
                  {section}
                </li>
              </ScrollLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
