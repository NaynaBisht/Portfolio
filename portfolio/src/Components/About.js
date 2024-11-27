import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../assets/Web app developers_ Development team.jpeg';
import image2 from '../assets/Web Development Company _ Web Development Services.jpeg';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-12 px-4" id="about">
      {/* Main Content Box */}
      <div className="relative w-[85%] min-h-[400px] bg-[#f3d182] rounded-3xl shadow-lg p-8 z-20" data-aos="fade-up">
        <h1 className="text-5xl text-center underline underline-offset-8 decoration-green-900 decoration-3 font-bold transition-transform duration-300 hover:scale-105">
          <span className="text-gray-600">About </span> Me
        </h1>
        <p className="p-2 text-lg text-center mt-6 text-slate-700 font-semibold w-full md:w-2/3 mx-auto">
          I'm a passionate web developer dedicated to creating seamless and engaging web experiences by building intuitive websites that deliver real value to users while maintaining clean and efficient code.
        </p>
        <p className="p-2 text-lg text-center mt-2 text-slate-700 font-semibold w-full md:w-3/4 mx-auto">
          With a strong foundation in both front-end and back-end technologies, I strive to combine creativity and functionality in every project.
        </p>
        {/* Images Section */}
        <div className="relative flex mt-10 flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
          {/* Front-End Developer Section */}
          <div className="text-center  w-full md:w-1/3" data-aos="fade-right" style={{ zIndex: 20 }}>
            <img
              src={image2}
              alt="skills"
              className="w-3/4 sm:w-2/3 md:w-full mx-auto rounded-3xl shadow-lg hover:scale-110 transition-transform duration-300"
            />
            <p className="mt-4 text-base sm:text-lg font-semibold text-slate-700">
              <span className="text-black text-xl sm:text-2xl font-bold">Front-End Developer</span>
              <br />
              Crafting intuitive user experiences and bringing designs to life with clean, interactive interfaces.
            </p>
          </div>

          {/* Back-End Developer Section */}
          <div className="text-center w-full md:w-1/3" data-aos="fade-left" style={{ zIndex: 20 }}>
            <img
              src={image1}
              alt="skills"
              className="w-3/4 sm:w-2/3 md:w-full mx-auto rounded-3xl shadow-lg hover:scale-110 transition-transform duration-300"
            />
            <p className="mt-4 text-base sm:text-lg font-semibold text-slate-700">
              <span className="text-black text-xl sm:text-2xl font-bold">Back-End Developer</span>
              <br />
              Building robust and scalable server-side applications that power dynamic web experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
