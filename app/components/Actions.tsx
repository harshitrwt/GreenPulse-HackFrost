


// import React from 'react';
// import { motion } from 'framer-motion'; // Import framer-motion

// const ActionSection = () => {
//   return (
//     <>
//       <div className="relative py-20 bg-green-600 h-[70vh] md:h-[120vh] flex flex-col justify-center items-center overflow-hidden">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-30"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1709147854339-b98a3abf8516?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2hlJTIwdHJlZXxlbnwwfHx8fDE2ODQ5MTYyNjI&amp;auto=format')",
//           }}
//         ></div>

//         {/* Main Title with Motion */}
//         <motion.h1
//           className="text-[10vh] mt-[-50vh] md:text-[45vh] md:mt-[-70vh] font-bold text-black z-10 text-center"
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Conserve
//         </motion.h1>
        
//       </div>
//     </>
//   );
// };

// export default ActionSection;


import React from 'react';
import { motion } from 'framer-motion';

const ActionSection = () => {
  return (
    <div className="relative h-[70vh] md:h-[120vh] flex flex-col justify-center items-center overflow-hidden mb-16 md:mb-36">
      {/* Dog Images as Background */}
      <div className="absolute inset-0 flex w-full h-full">
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
      </div>

      {/* Main Title with Motion */}
      <motion.h1
        className="text-[10vh] md:text-[45vh] font-bold text-black z-10 text-center md:mt-10  mt-[-10vh]"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Conserve
      </motion.h1>
      <motion.h1
        className="text-[10vh] md:text-[47vh] font-bold text-black z-10 text-center md:mt-[-16vh]  mt-[2vh]"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Preserve
        
      </motion.h1>
      
      <motion.h1
        className="text-[10vh] md:text-[52vh] font-bold text-black z-10 text-center md:mt-[-19vh]  mt-[2vh]"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Sustain
      </motion.h1>
    </div>
  );
};

export default ActionSection;
