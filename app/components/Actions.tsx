import React from "react";
import { motion } from "framer-motion";

const ActionSection = () => {
  return (
    <div className="relative h-[70vh] md:h-[120vh] flex flex-col justify-center items-center overflow-hidden mb-16 md:mb-56">
      
      <motion.div
        className="absolute inset-0 flex w-full h-full"
        initial={{ x: "-100%" }}
        
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 65, damping: 30, duration: 10}}
      >
        <div className="w-1/2 h-full">
          <img
            src="https://t3.ftcdn.net/jpg/06/51/87/36/360_F_651873629_VFqUwzME4JV5nYUBAeCAkjZyCIx9IrWR.jpg"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-full">
          <img
            src="https://img.freepik.com/premium-photo/wild-animals-running-forest-escape-forest-fire_407474-38138.jpg"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      
      <motion.div
        className="relative z-10 text-center md:mr-0 mr-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.3,
              type: "spring",
              stiffness: 50,
              damping: 20,
              
            },
          },
        }}
      >
        <motion.h1
          className="text-[10vh] md:text-[45vh] font-bold md:text-black text-white md:mt-10 mt-[-10vh]"
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 10 , transition:{
              duration: 2,
            }},
          }}
        >
          Conserve
        </motion.h1>
        <motion.h1
          className="text-[10vh] md:text-[47vh] font-bold md:text-black text-white md:mt-[-16vh] mt-[2vh]"
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 10 , transition:{
              duration: 2,
            }},
          }}
        >
          Preserve
        </motion.h1>
        <motion.h1
          className="text-[10vh] md:text-[52vh] font-bold md:text-black text-white md:mt-[-19vh] mt-[2vh]"
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 10 , transition:{
              duration: 2,
            }},
          }}
        >
          Sustain
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default ActionSection;
