import React from 'react'
import profile from '../assets/PROFILE2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className='flex p-4 justify-center items-center flex-col md:flex-row'>
      <img 
        src={profile} 
        alt="Profile" 
        className='w-[30%] rounded-full mt-10 mr-8 border-4 shadow-xl sm:w-[50%] md:w-[30%]' 
      />
      
      <div className='mt-10 ml-8 flex flex-col items-center text-center md:items-start md:text-left'> 
      
        <h1 className='text-4xl font-bold'>Hey There!</h1>
        <h2 className='text-xl mt-4'>I'm <span className='text-yellow-600 text-2xl font-bold'>Nayna Bisht</span> , A 
        <span className='text-gray-700 font-semibold '> Web Developer </span> 
        Crafting Seamless Digital Experiences</h2>


        <p className="text-gray-500 mt-4 font-medium max-w-md">
          I build intuitive, responsive websites that bridge the gap between design and functionality.
          <br />
          Turning ideas into code, and code into impactful online solutions.
        </p>  

        <div className='mt-6'>
          <div className='flex gap-5 justify-center items-center flex-wrap'>
            <button className='bg-lime-600 rounded-full text-white font-bold px-6 py-2  hover:cursor-pointer ease-in-out hover:scale-110 transition-all duration-300'>
              View Resume
            </button>
            <button className='border-4 border-yellow-600 text-yellow-600 rounded-full font-bold  px-6 py-2 ml-4 hover:cursor-pointer ease-in-out hover:scale-110 transition-all duration-300'>
              View Projects
            </button>
          </div>

          <div className='mt-8 flex justify-center space-x-6'>
            <a href='https://www.linkedin.com/in/nayna-bisht-830b2630b/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} className='hover:cursor-pointer ease-in-out hover:scale-110 transition-all duration-300 text-2xl text-gray-900' />
            </a>
            <a href='https://github.com/NaynaBisht' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} className='hover:cursor-pointer ease-in-out hover:scale-110 transition-all duration-300 text-2xl text-gray-900' />
            </a>
            <a href='https://www.instagram.com/nayna_bisht/?next=%2Fexplore%2F' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} className='hover:cursor-pointer ease-in-out hover:scale-110 transition-all duration-300 text-2xl text-gray-900' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
