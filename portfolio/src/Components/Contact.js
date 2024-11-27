import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="p-4 sm:p-8" id="contact">
      <div className='flex flex-col lg:flex-row bg-[#abcd85] mx-auto rounded-3xl w-full lg:w-[80%] items-center justify-between p-6 lg:p-8'>
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0" data-aos="fade-right">
          <FontAwesomeIcon icon={faEnvelope} className="text-5xl mb-4 lg:mb-6" style={{ color: "black" }} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 tracking-wide">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Have a project or idea in mind? 
            <br />
            <span className="text-lime-900 text-xl sm:text-xl font-extrabold">Let’s collaborate</span> and create something extraordinary! 
            <br /><br />
            Questions, ideas, or collaborations – 
            <br />
            <span className="italic">I’m just a message away.</span>
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full lg:w-1/2" data-aos="fade-up">
          <form className="max-w-full mx-auto lg:max-w-lg p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
              
              {/* Name Field */}
              <div className="w-full sm:w-1/2">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-700" placeholder="Your Name" required />
              </div>

              {/* Email Field */}
              <div className="w-full sm:w-1/2">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-700" placeholder="Your Email" required />
              </div>
            </div>
            
            {/* Message Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea id="message" className="w-full px-4 py-2 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-lime-700" placeholder="Your Message" required />
            </div>
            
            {/* Submit Button */}
            <button type="submit" className="w-full bg-lime-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-lime-800 transition-transform transform hover:scale-105 ease-in-out duration-300 cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
