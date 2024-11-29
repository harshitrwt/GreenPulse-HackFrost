import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const ActionSection = () => {
  return (
    <>
      <div className="relative py-20 bg-green-600 h-[70vh] md:h-[120vh] flex flex-col justify-center items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1709147854339-b98a3abf8516?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2hlJTIwdHJlZXxlbnwwfHx8fDE2ODQ5MTYyNjI&amp;auto=format')",
          }}
        ></div>

        {/* Main Title with Motion */}
        <motion.h1
          className="text-[10vh] mt-[-50vh] md:text-[45vh] md:mt-[-70vh] font-bold text-black z-10 text-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Conserve
        </motion.h1>
      </div>

      {/* Box Section with Motion */}
      

      <br />
      <br />
      <br />

      
      
    </>
  );
};

export default ActionSection;
