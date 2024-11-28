import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="mt-4 p-4 bg-gray-800">
      <div className="text-center">
        <p className="mt-1 text-sm sm:text-base text-white italic">
          In the rush, find your pace.✨
        </p>

        <div className="mt-2 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/nayna-bisht-830b2630b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white text-3xl hover:text-[#0e76a8] hover:cursor-pointer ease-in-out hover:scale-125 transition-all duration-300"
            />
          </a>
          <a
            href="https://github.com/NaynaBisht"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white text-3xl hover:cursor-pointer ease-in-out hover:scale-125 transition-all duration-300"
            />
          </a>
          <a
            href="https://www.instagram.com/nayna_bisht/?next=%2Fexplore%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-3xl hover:text-[#E4405F] hover:cursor-pointer ease-in-out hover:scale-125 transition-all duration-300"
            />
          </a>
        </div>

        <div className="mt-4 text-white text-xs text-center">
          <p>&copy; 2024 Nayna Bisht. All rights reserved.</p>
          <p className="mt-1">
            Contact: <a href="mailto:naynabisht241@gmail.com" className="hover:underline text-blue-400">naynabisht241@gmail.com</a>
          </p>
        </div>

      </div>
    </div>

  );
}

export default Footer;
