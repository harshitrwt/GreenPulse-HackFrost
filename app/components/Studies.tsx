
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; 

const StudySection = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const animationVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <div className="relative py-20 bg-white mt-10 mb-20 overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        
        
        <motion.h1
          className="mb-8 md:text-[56px] text-[31px] md:font-semibold text-black"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 2.5, delay: 1.5 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }} 
        >
          What we do 
        </motion.h1>

        
        <motion.p
      className="alfa-font p-5 text-black rouge-script md:mt-4 md:text-[55px] md:mx-auto md:text-center md:justify-center md:items-center md:max-w-7xl text-[16px] justify-center items-center max-w-xl text-justify"
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      transition={{ duration: 1.5, delay: 1 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      GreenPulse <span className='md:underline md:decoration-green-500 md:decoration-6'>tracks</span> your monthly carbon 
      {isLargeScreen ? <><span className="hidden:block"><br /></span></> : null}
      footprints, guiding <span className='md:font-bold md:underline md:decoration-green-500 md:decoration-6'>sustainable </span>
      <span className='md:underline md:decoration-green-500 md:decoration-6'>actions </span>
      {isLargeScreen ? <><br /></> : null}
      <span className='md:font-semibold '>toward a cleaner <span className='underline decoration-green-500 decoration-6'>and a greener future.</span></span>
    </motion.p>

        
        <div className="mt-5">
          <Link href="/checkprints">
            <motion.button
              className="mt-10 relative inline-flex h-14 overflow-hidden rounded-full p-[3px] border-2 border-black focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-50"
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 1.5, delay: 1.5 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="absolute inset-[-800%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#555555_50%,#FFFFFF_10%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-green-500 px-10 py-4 md:text-xl font-medium text-white backdrop-blur-3xl hover:bg-green-600 transition-colors duration-300">
                Check Your Carbon Footprints 🤨
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudySection;




