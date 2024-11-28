import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import skill from '../assets/skill.png';

// Import logos or use CDN links
import htmlLogo from '../assets/logos/html5.svg';
import cssLogo from '../assets/logos/tailwindcss.svg';
import jsLogo from '../assets/logos/javascript.svg';
import reactLogo from '../assets/logos/react.svg';
import nodeLogo from '../assets/logos/nodedotjs.svg';
import expressLogo from '../assets/logos/express.svg';
import mongoLogo from '../assets/logos/mongodb.svg';
import gitLogo from '../assets/logos/git.svg';
import githubLogo from '../assets/logos/github.svg';
import pythonLogo from '../assets/logos/python.svg';
import vercelLogo from '../assets/logos/vercel.svg';
import javaLogo from '../assets/logos/java.svg';

const skillLogos = [
  { name: 'HTML', logo: htmlLogo },
  { name: 'Tailwind CSS', logo: cssLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'Express', logo: expressLogo },
  { name: 'MongoDB', logo: mongoLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'Git', logo: gitLogo },
  { name: 'GitHub', logo: githubLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'Vercel', logo: vercelLogo },
];

const Skills = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="mt-28 mb-20" id="skills">
      <div className="flex flex-row justify-center items-center" data-aos="fade-left">
        <img src={skill} className="w-[70px]" alt="Skills Icon" />
        <h1 className="text-[40px] font-bold hover:scale-105 transition-transform duration-300">Skills <span className="text-gray-600 hover:scale-105 transition-transform duration-300">& Tools</span></h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 px-8" data-aos="fade-right">
        {skillLogos.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={skill.logo} alt={skill.name} className="w-[80px] h-[80px] mb-4 hover:scale-110 transition-transform duration-300" />
            <p className="text-lg font-medium text-gray-800">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
