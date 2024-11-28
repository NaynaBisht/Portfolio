import React from 'react'
import photo from '../assets/Premium_Vector___Dart_arrow_hit_the_center_of_target_Business_finance_target_goal_of_success_target_achievement_concept_3d_vector_icon_Cartoon_minimal_style-removebg-preview.png';

function Experience() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-28 px-4" id="experience">
        <div className="w-full sm:w-[85%] min-h-[400px] relative">
          <div className='flex flex-row justify-center'>
            <img src={photo} alt="laptop" className='w-20 h-20 mr-5' />
            <h1 className="text-3xl sm:text-5xl text-center underline underline-offset-8 decoration-green-900 decoration-3 font-bold mt-2 mb-12 text-gray-600 hover:scale-105 transition-transform duration-300">
              Experience <span className="hover:scale-105 transition-transform text-black duration-300"> & Achievements</span>
            </h1>
          </div>

          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-24 bottom-0 w-0.5 bg-green-900"></div>

          {/* Left aligned box */}
          <div className="flex flex-col sm:flex-row justify-start mb-8">
            <div className="w-full sm:w-[48%] bg-[#f3d182] p-6 rounded-xl shadow-lg" data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-2">Web Developer Intern</h3>
              <h4 className="text-lg font-semibold mb-2">Univoc Foundation | Nov 2024 - Present</h4>
              <p className="text-gray-700">
                Led development of student portal website, implementing responsive interfaces for enhanced user engagement. Focused on accessibility and user experience optimization.
              </p>
            </div>
          </div>

          {/* Right aligned box */}
          <div className="flex flex-col sm:flex-row justify-end mb-8">
            <div className="w-full sm:w-[48%] bg-[#f3d182] p-6 rounded-xl shadow-lg" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-2">National Ideathon - 3rd Prize</h3>
              <h4 className="text-lg font-semibold mb-2">CVR College Of Engineering | March 2024</h4>
              <p className="text-gray-700">
                Led team to develop Green-Track, an e-waste management platform aligned with Swachh Bharat Abhiyan. Successfully pitched to investors and secured third position.
              </p>
            </div>
          </div>

          {/* Left aligned box */}
          <div className="flex flex-col sm:flex-row justify-start mb-8">
            <div className="w-full sm:w-[48%] bg-[#f3d182] p-6 rounded-xl shadow-lg" data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-2">AMTZ Medical Hackathon</h3>
              <h4 className="text-lg font-semibold mb-2">Vishakhapatnam | April 2024</h4>
              <p className="text-gray-700">
                Developed ArogyaKosh, a secure medical records management system, streamlining healthcare documentation and improving accessibility.
              </p>
            </div>
          </div>

          {/* Right aligned box */}
          <div className="flex flex-col sm:flex-row justify-end mb-8">
            <div className="w-full sm:w-[48%] bg-[#f3d182] p-6 rounded-xl shadow-lg" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-2">Engineering Clinics Project</h3>
              <h4 className="text-lg font-semibold mb-2">VIT | August 2023</h4>
              <p className="text-gray-700">
                Led development of V-Bucks, an innovative offline payment system utilizing RFID technology for campus transactions, streamlining the payment process for students and staff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
