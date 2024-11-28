import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper components
import { Autoplay, Navigation } from 'swiper/modules';  // Import Swiper modules
import 'swiper/css';  // Import Swiper styles
import 'swiper/css/navigation';
import robo from '../assets/robo.png';

function Projects() {
  return (
    <div className="mt-28 mb-6 mr-4 ml-4" id="projects">
      <div className="flex flex-row justify-center items-center mb-12">
        <img src={robo} alt="robo" className="w-20 h-20 mr-2" />
        <h1 className="text-[40px] font-bold hover:scale-105 transition-transform duration-300 underline underline-offset-8 decoration-green-900 decoration-4">
          Featured <span className="text-gray-600">Projects</span>
        </h1>
      </div>

      <Swiper
         breakpoints={{
          300: { slidesPerView: 1 },
          640: { slidesPerView: 1 },  // 1 slide on small screens
          768: { slidesPerView: 2 },  // 2 slides on tablets
          1024: { slidesPerView: 3 }, // 3 slides on desktops
        }}
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        navigation
        loop={true}  // Infinite loop
      >
        <SwiperSlide className="transform transition-all duration-300">
          <div className="bg-white mt-3 mb-4 rounded-xl shadow-lg p-6 h-full transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">CropCoin</h3>
            <p className="text-gray-600 mb-4">
            A fintech platform offering market access for farmers with computer vision-based quality assessment, integrated with E-NAM for bidding and DPI infrastructure.
            </p>
            <a href="#" className="text-green-600 hover:text-green-800 font-semibold">View on GitHub →</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white mt-3 rounded-xl shadow-lg p-6 h-full transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Financers Hub</h3>
            <p className="text-gray-600 mb-4">
            A fintech platform enabling loan applications and investor connections for MSMEs, with loan request routing and investor database management.
            </p>
            <a href="#" className="text-green-600 hover:text-green-800 font-semibold">View on GitHub →</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white mt-3 rounded-xl shadow-lg p-6 h-full transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">BiteScout</h3>
            <p className="text-gray-600 mb-4">
              Empowers users with informed food choices through OpenFoodFacts API integration.
              Provides detailed insights into food products and nutritional information.
            </p>
            <a href="#" className="text-green-600 hover:text-green-800 font-semibold">View on GitHub →</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white mt-3 rounded-xl shadow-lg p-6 h-full transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Farm Futuro</h3>
            <p className="text-gray-600 mb-4">
              Smart technology platform for farmers offering real-time data and insights.
              Enhances crop management and connects to new market opportunities.
            </p>
            <a href="#" className="text-green-600 hover:text-green-800 font-semibold">View on GitHub →</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Projects;
