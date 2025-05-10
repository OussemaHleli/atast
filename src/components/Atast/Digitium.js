import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Isitcomm from "../../assests/isitcom.png";

const Digitium = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button 
          className="text-white hover:text-red-600 transition-colors duration-200 mb-6" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image and Header */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="relative">
              <img 
                src={Isitcomm}
                alt="digitium" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 flex flex-col items-center w-16 h-16 rounded-lg overflow-hidden shadow-lg">
                <div className="bg-red-600 w-full h-4"></div>
                <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg bg-[#151515]">
                  9
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#151515] rounded-xl">
              <span className="text-red-600 text-xl font-semibold font-[Montserrat]">DIGITIUM</span>
              <div className="text-right">
                <p className="text-white text-sm font-semibold font-[Montserrat]">Saturday, 13:30</p>
                <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-2 rounded-md font-bold mt-2 transition-colors duration-200">
                  Register
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 bg-[#151515] p-6 rounded-xl"
          >
            <h2 className="text-2xl font-semibold">Calling all student entrepreneurs!</h2>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Are you a student with big dreams of starting your own <span className="font-bold text-white">business</span>? Looking for guidance and inspiration to turn your ideas into <span className="font-bold text-white">reality</span>?
              </p>
              <p>
                Look no further than <span className="text-red-600 font-bold">DIGITIUM</span> – your gateway to a successful business in the Digital Era!
              </p>
              <p>
                Join us for a day filled with wisdom and insights from successful content creators, entrepreneurs, and marketing mavens who will share their stories, insights, and strategies for success.
              </p>
              <p>
                Get ready to be <span className="font-bold text-white">motivated, empowered</span>, and armed with the tools and <span className="font-bold text-white">knowledge</span> you need to succeed.
              </p>
              <p>
                Whether you're passionate about technology, social impact, or traditional business models, <span className="text-red-600 font-bold">DIGITIUM</span> has something for everyone!
              </p>
            </div>

            <div className="bg-black/30 p-4 rounded-lg">
              <p className="font-semibold mb-3">Save the date and join us:</p>
              <ul className="space-y-2 text-red-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                  Saturday, March 9th
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                  ISTCom Hammem sousse
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                  13h30
                </li>
              </ul>
            </div>

            <p className="text-sm text-gray-400 italic">
              Don't miss this opportunity to connect with like-minded individuals, gain valuable knowledge, and be inspired to take the first step towards your entrepreneurial journey.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Digitium;