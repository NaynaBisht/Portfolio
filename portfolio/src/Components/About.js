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
    <div className="flex flex-col items-center justify-center mt-12 px-4">
      {/* Main Content Box */}
      <div className="relative w-[85%] min-h-[450px] bg-[#f3d182] rounded-3xl shadow-lg p-8 z-10">
        <h1 className="text-5xl text-center underline underline-offset-8 decoration-green-900 decoration-3 font-bold transition-transform duration-300 hover:scale-105" data-aos="fade-up">
          <span className="text-gray-600">About </span> Me
        </h1>
        <p className="p-2 text-lg text-center mt-6 text-slate-700 font-semibold w-full md:w-2/3 mx-auto" data-aos="fade-up">
          I'm a passionate web developer dedicated to creating seamless and engaging web experiences by building intuitive websites that deliver real value to users while maintaining clean and efficient code.
        </p>
        <p className="p-2 text-lg text-center mt-2 text-slate-700 font-semibold w-full md:w-3/4 mx-auto">
          With a strong foundation in both front-end and back-end technologies, I strive to combine creativity and functionality in every project.
        </p>
      </div>

      {/* Images Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 -mt-28">
        <div className="text-center w-full md:w-1/3" data-aos="fade-right" style={{ zIndex: 20 }}>
          <img
            src={image2}
            alt="skills"
            className="w-full mx-auto rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <p className="mt-4 text-lg font-semibold text-slate-700">
            <span className="text-black text-2xl font-bold">Front-End Developer</span>
            <br />
            Crafting intuitive user experiences and bringing designs to life with clean, interactive interfaces.
          </p>
        </div>

        <div className="text-center w-full md:w-1/3" data-aos="fade-left" style={{ zIndex: 20 }}>
          <img
            src={image1}
            alt="skills"
            className="w-full mx-auto rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <p className="mt-4 text-lg font-semibold text-slate-700">
            <span className="text-black text-2xl font-bold">Back-End Developer</span>
            <br />
            Building robust and scalable server-side applications that power dynamic web experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
