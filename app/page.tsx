
"use client";

import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./components/HeroSection";
import StudySection from "./components/Studies";
import ActionSection from "./components/Actions";
import Impact from "./components/Impact";
import Footer from "./components/Footer";
import ChatPage from "./components/Chatbot";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


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
        <span className="text-3xl md:text-5xl  mx-2 text-gray-800">+</span>
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
        
        <p className="mt-4 text-sm md:text-lg text-gray-700 items-center justify-center text-center mx-auto ">
        <span className="hidden md:block">Carbon emissions have steadily increased over the years, driven by rapid industrialization, 
        deforestation, and growing energy demands. The urgent need to curb this trend is evident, 
        as transitioning to renewable energy and adopting sustainable practices become critical.</span> 
        <br/>Below are key statistics highlighting the rise in carbon emissions over time:
        </p>

        <motion.div
  className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 40 },
  }}
  transition={{
    duration: 5, 
    ease: "easeOut", 
  }}
>
  <AnimatedNumber value={37.75} label="billion metric T, 2023 Emissions" />
  <AnimatedNumber value={37.15} label="billion metric T, 2022 Emissions" />
  <AnimatedNumber value={34.12} label="billion metric T, 2020 Emissions" />
  <AnimatedNumber value={22.63} label="billion metric T, 1990 Emissions" />
</motion.div>

      </section>
      <div className="relative mt-20 flex justify-center items-center px-4 max-w-screen-xl mx-auto mb-20">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <div className="flex justify-center">
      <motion.div
        className="w-[64vh] md:h-[77vh] bg-white rounded-lg shadow-2xl flex flex-col items-center justify-center p-6"
        initial= "hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 3 }}
      >
        <h2 className="text-5xl font-bold text-green-600 mb-4">Top Articles</h2>
        <video autoPlay loop muted className="h-[60%] w-full object-cover rounded-lg border-6 border-green-500">
          <source src="/videos/bgvideo3.mp4" type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
        <blockquote className="text-lg italic text-gray-500 mt-4">
          The Earth does not belong to us; we belong to the Earth.  Marlee Matlin
        </blockquote>
      </motion.div>
    </div>

    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-2">
      
      <motion.div
        className="bg-white p-4 rounded-lg shadow-2xl hover:bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-xl font-bold text-green-600 mb-2">Leadership of India in Carbon Emission Reporting</h2>
        <p className="text-sm text-gray-500">
          India has emerged as a global leader in carbon emission reporting by securing a spot among the top three countries alongside Brazil and China.
        </p>
        <a href="https://egov.eletsonline.com/2024/09/india-among-top-3-countries-in-carbon-emission-reporting-reduction-report/" className="block">
          <button className="bg-green-600 text-white mt-12  p-2 hover:bg-green-500">Read more</button>
        </a>
      </motion.div>

      
      <motion.div
        className="bg-white p-4 rounded-lg shadow-2xl hover:bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h2 className="text-xl font-bold text-green-600 mb-2"> 2024-25 Emissions Reduction Plan of China</h2>
        <p className="text-sm text-gray-500">
          China is focusing on energy conservation and CO2 reduction targets for high-emitting industries as part of its action plan for 2024-25.
        </p>
        <a href="https://www.china-briefing.com/news/china-energy-conservation-and-co2-reduction-plan-compliance-considerations-for-businesses/" className="block">
          <button className="bg-green-600 text-white mt-12 p-2 hover:bg-green-500">Read more</button>
        </a>
      </motion.div>

      
      <motion.div
        className="bg-white p-4 rounded-lg shadow-2xl hover:bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-xl font-bold text-green-600 mb-2">Decarbonization Efforts in Heavy-Emitting Industries</h2>
        <p className="text-sm text-gray-500">
          A report discusses how six heavyemitting sectors are working towards decarbonization which is crucial for meeting global climate goals.
        </p>
        <a href="https://www.weforum.org/stories/2024/09/decarbonization-heavy-emitting-industries/" className="block">
          <button className="bg-green-600 text-white mt-[70px] p-2 hover:bg-green-500">Read more</button>
        </a>
      </motion.div>

      
      <motion.div
        className="bg-white p-4 rounded-lg shadow-2xl hover:bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2 className="text-xl font-bold text-green-600 mb-2">Global Carbon Emissions on the Rise Despite Progress</h2>
        <p className="text-sm text-gray-500">
          Despite advancements in electric vehicles and renewable energy thus global carbon emissions are projected to reach a new record in 2024 highlighting the urgent need for action.
        </p>
        <a href="https://theconversation.com/global-carbon-emissions-inch-upwards-in-2024-despite-progress-on-evs-renewables-and-deforestation-243133" className="block">
          <button className="bg-green-600 text-white mt-12 p-2 hover:bg-green-500">Read more</button>
        </a>
      </motion.div>
    </div>
  </div>
</div>


      <Impact />
      <Footer />
    </div>
  );
};

export default App;



