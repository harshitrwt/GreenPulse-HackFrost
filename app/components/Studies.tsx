import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; 

const StudySection = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1.5, y: 0, transition: { duration: 2 } },
  };

  return (
    <div className="relative py-20 bg-white mt-10 mb-20 overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        
        
        <motion.h1
          className="md:cursive-font mb-8 md:text-[56px] text-[31px] md:font-normal font-semibold text-black"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 1, delay: 0.5 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} 
        >
          What&apos;s Carbon Emission
        </motion.h1>

        
        <motion.p
          className="cursive-font text-black rouge-script md:mt-4 md:text-[48px] md:mx-auto md:text-center md:justify-center md:items-center md:max-w-6xl text-[16px] mx-auto justify-center items-center max-w-xl"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 1, delay: 1 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Carbon footprints are a stark reminder of our impact on the planet, with each person contributing an average of <span className="underline decoration-green-500 decoration-6 font-bold">4 tons of carbon dioxide annually</span>. This unchecked emission accelerates climate change, leading to <span className="underline decoration-green-500 decoration-6 font-bold">extreme weather, rising sea levels, and biodiversity loss</span>. If we don&apos;t act now to reduce our footprints, future <span className="underline decoration-green-500 decoration-6 font-bold">generations will face dire consequences</span>.
        </motion.p>

        
        <div className="mt-5">
          <Link href="/checkprints">
            <motion.button
              className="cursive-font md:mt-4 md:px-16 md:py-5 px-5 py-5 bg-green-600 hover:bg-green-700 text-white font-semibold text-xl transition-colors duration-300"
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 1, delay: 1.5 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Check Your Carbon Footprint <span className="h-32 w-20">🤨</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudySection;
