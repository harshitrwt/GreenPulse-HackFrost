import React from 'react';
import { motion } from 'framer-motion'; 
import Link from 'next/link';

const HeroSection = () => {

  const textAnimation = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1.5, y: 0, transition: { duration: 2 } }, 
  };

  return (
    <div className="relative h-screen overflow-hidden w-full">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="/videos/bgvideo1.mp4" type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 w-full h-38 z-20"> 
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-4 rounded-b-full">
          <div className="flex items-center z-30"> 
            <img
              src="mainlogo.png" 
              alt="🌏 EcoClub"
              className="md:h-56 md:w-56 md:mt-[-70px] h-32 w-32 mr-2 text-3xl rounded-b-full"
            />
          </div>
          
          <nav className="flex-col md:flex md:flex-row md:space-x-4 md:mt-[-50px] mt-[5px] text-white ml-4 z-30 cursor-pointer">
            <a href="https://www.unep.org/news-and-stories" className=" cursor-pointer">
              News
            </a>
            <a
              href="https://github.com/itsharshitrwt"
              className="text-white ml-5 cursor-pointer hiver:bg-green-600 transition-colors duration-200"
            >
              <button className="text-white p-3 bg-green-600 hover:bg-green-600 transition-colors duration-200 md:mt-[-20px] md:w-32 animate-pulse md:text-xl md:font-semibold cursor-pointer hover:text-white-600">
                Star ⭐
              </button>
            </a>
          </nav>

        </div>
      </div>


      
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center z-10">
        
        <motion.h1
          initial="hidden" 
          animate="visible" 
          variants={textAnimation} 
          className="alfa-font mt-10 md:mt-0 text-5xl md:text-6xl md:font-bold mb-9 md:mb-3"
        >
          Take a Stand, Our Planet Is Under <span className="underline decoration-red-700 decoration-6 mb-3">Attack!</span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="abril-font md:mt-6 text-lg md:text-xl mx-auto"
        >
          Join the battle to reclaim our planet and demand for a sustainable future!
        </motion.p>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="abril-font text-lg md:text-xl hidden md:block"
        >
          Every action counts—whether it&apos;s reducing your carbon footprint, advocating for sustainable practices,
        </motion.p>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="abril-font text-lg md:text-xl hidden md:block"
        >
          or demanding accountability from corporations. Join us in this urgent fight against carbon emissions.
        </motion.p>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="abril-font text-lg md:text-xl mb-4"
        >
          Together, we can reclaim our planet and ensure a livable future for generations.
        </motion.p>
        <motion.a
          href="https://www.epa.gov/environmental-topics/greener-living"
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
        >
          <motion.button 
            className="mt-6 px-12 py-5 bg-green-600 hover:bg-green-700 text-white font-semibold"
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.3 }} 
          >
            Learn More
          </motion.button>
        </motion.a>
      </div>
    </div>
  );
};

export default HeroSection;

