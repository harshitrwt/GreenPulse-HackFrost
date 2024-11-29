// "use client"

// import { useState, useEffect } from 'react'
// import HeroSection from './components/HeroSection'
// import StudySection from './components/Studies'
// import ActionSection from './components/Actions'
// import Footer from './components/Footer'
// import ChatPage from './components/Chatbot'
// import Impact from './components/Impact'
// export default function Home() {
//   return (
//     <div>
//        <HeroSection/>
//        <StudySection/>
//        <ActionSection/>
//        <ChatPage/>
//        <Impact/>
//        <Footer/>
       
//     </div>
     
//   )
// }



// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import HeroSection from "./components/HeroSection";
// import StudySection from "./components/Studies";
// import ActionSection from "./components/Actions";
// import Impact from "./components/Impact";
// import Footer from "./components/Footer";
// import ChatPage from "./components/Chatbot";
// import { motion } from "framer-motion";


// // Define the props interface
// interface AnimatedNumberProps {
//   value: number; // Expecting a number
//   label: string; // Expecting a string
// }

// const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, label }) => {
//   const [count, setCount] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef<HTMLDivElement | null>(null); // Type for ref

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 } // Trigger when 10% of the element is visible
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (isVisible) {
//       let start = 0;
//       const end = value;
//       const duration = 40000; // Duration of the animation in milliseconds
//       const incrementTime = Math.abs(Math.floor(duration / (end * 100))); // Calculate time per increment
//       const incrementValue = end / 100; // Increment by a fraction of end value

//       const timer = setInterval(() => {
//         start += incrementValue;
//         setCount(start);
//         if (start >= end) {
//           clearInterval(timer);
//           setCount(end); // Ensure we set count to the exact end value
//         }
//       }, incrementTime);

//       return () => clearInterval(timer); // Cleanup on unmount
//     }
//   }, [isVisible, value]);

//   return (
//     <div className="flex flex-col items-center" ref={ref}>
//       <div className="w-8 h-8 bg-red-500 rounded-full my-2"></div>
//       <div className="flex">
//         <span className="text-4xl font-bold text-gray-800">{count.toFixed(2)}</span>
//         <span className="text-[25px] mx-2 text-gray-800">+</span> {/* Plus icon */}
//       </div>
//       <span className="text-lg text-gray-800">{label}</span>
//     </div>
//   );
// };

// const App: React.FC = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(true);
//   useEffect(() => {
//     // Check localStorage for the popup flag
//     const hasSeenPopup = localStorage.getItem("hasSeenPopup");
//     if (!hasSeenPopup) {
//       setIsPopupVisible(true);
//       localStorage.setItem("hasSeenPopup", "true"); // Set the flag in localStorage
//     }
//   }, []);
//   const closePopup = () => {
//     setIsPopupVisible(false);
//   };

//   return (
//     <div>
//       {/* Popup */}
//       {isPopupVisible && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg relative md:h-[60vh] md:w-[60vh] w-80 border-4 border-green-600">
//             <button
//               className="absolute top-2 right-2 text-green-500 hover:text-gray-700"
//               onClick={closePopup}
//             >
//               ✖
//             </button>
//             <h2 className="text-2xl font-bold mb-4">The Website feels awesome on larger screens 😁</h2>
//             <p className="text-xl text-gray-600">
//               This page is optimized for larger screens. If you are viewing it on a large screen please continue, But If you are viewing it on a small screen, Please shift to a larger screen for the best
//               experience.<br/><br/><br/>Thank you for Visiting!
//             </p>
//           </div>
//         </div>
//       )}

//       <HeroSection />
//       <StudySection />
//       <ActionSection />
      
//       <br />
      
      
//       <ChatPage/>
//       <section id="learn-more" className="p-10 mb-16 mt-20">
//         <h2 className="text-center text-4xl font-semibold mb-5">
//           <span className="underline decoration-red-500 md:text-[80px]">Rising!</span><span className="md:text-[50px]"> Carbon Emissons 😨</span>
//         </h2>
//         <p className="mt-4 text-center">Detailed content about carbon emissions</p>
//         <p className="mt-4 text-center text-lg text-gray-700">
//     Carbon emissions have been on the rise due to various factors, including industrialization, deforestation, and increased energy consumption. 
//     It is crucial to understand the impact of these emissions on climate change and the environment. 
//     Efforts to reduce carbon footprints and transition to renewable energy sources are essential for a sustainable future.
//   </p>

//         <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           <AnimatedNumber value={37.75} label="billion metric T, 2023 Emissions" />
//           <AnimatedNumber value={37.15} label="billion metric T, 2022 Emissions" />
//           <AnimatedNumber value={34.12} label="billion metric T, 2020 Emissions" />
//           <AnimatedNumber value={22.63} label="billion metric T,  1990 Emissions" />
//         </div>
//       </section>
      
      
// <Impact />
// <Footer />
//     </div>
//   );
// };

// export default App;


"use client";

import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./components/HeroSection";
import StudySection from "./components/Studies";
import ActionSection from "./components/Actions";
import Impact from "./components/Impact";
import Footer from "./components/Footer";
import ChatPage from "./components/Chatbot";
import { motion } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  label: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = value;
      const duration = 40000;
      const incrementTime = Math.abs(Math.floor(duration / (end * 100)));
      const incrementValue = end / 100;

      const timer = setInterval(() => {
        start += incrementValue;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div
      className="flex flex-col items-center px-4 md:px-0"
      ref={ref}
    >
      <div className="w-8 h-8 bg-red-500 rounded-full my-2"></div>
      <div className="flex items-baseline">
        <span className="text-2xl md:text-4xl font-bold text-gray-800">
          {count.toFixed(2)}
        </span>
        <span className="text-sm md:text-lg mx-2 text-gray-800">+</span>
      </div>
      <span className="text-sm md:text-lg text-gray-800">{label}</span>
    </div>
  );
};

const App: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setIsPopupVisible(true);
      localStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg relative w-80 md:w-[60vh] border-4 border-green-600">
            <button
              className="absolute top-2 right-2 text-green-500 hover:text-gray-700"
              onClick={closePopup}
            >
              ✖
            </button>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              The Website feels awesome on larger screens 😁
            </h2>
            <p className="text-sm md:text-xl text-gray-600">
              This page is optimized for larger screens. If you are viewing it
              on a small screen, please switch to a larger screen for the best
              experience.<br /><br />Thank you for Visiting!
            </p>
          </div>
        </div>
      )}

      <HeroSection />
      <StudySection />
      <ActionSection />
      <br />
      <ChatPage />
      <section id="learn-more" className="p-4 md:p-10 mb-16 mt-20">
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-5">
          <span className="underline decoration-red-500 md:text-[80px]">Rising!</span>
          <span className="text-lg md:text-[50px]"> Carbon Emissions 😨</span>
        </h2>
        <p className="mt-4 text-center text-sm md:text-lg">
          Detailed content about carbon emissions
        </p>
        <p className="mt-4 text-center text-sm md:text-lg text-gray-700">
          Carbon emissions have been on the rise due to various factors,
          including industrialization, deforestation, and increased energy
          consumption. Efforts to reduce carbon footprints and transition to
          renewable energy sources are essential for a sustainable future.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedNumber value={37.75} label="billion metric T, 2023 Emissions" />
          <AnimatedNumber value={37.15} label="billion metric T, 2022 Emissions" />
          <AnimatedNumber value={34.12} label="billion metric T, 2020 Emissions" />
          <AnimatedNumber value={22.63} label="billion metric T, 1990 Emissions" />
        </div>
      </section>

      <Impact />
      <Footer />
    </div>
  );
};

export default App;




