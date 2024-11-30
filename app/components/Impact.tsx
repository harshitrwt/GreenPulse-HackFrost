
"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Impact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/10/14/Pictures/plantation_6da01ad6-b09e-11e7-9bc1-6ddb500cf946.jpg')",
          clipPath: "ellipse(100% 80% at 50% 90%)"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div
          ref={ref} 
          className="flex flex-col justify-center items-center h-full text-white"
        >
          
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 50, opacity: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Make an{" "}
            <span className="font-bold underline decoration-green-500 decoration-6">
              Impact
            </span>{" "}
            Today!
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6 text-center px-4 max-w-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 50, opacity: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Join us in our mission to reduce carbon emissions and{" "}
            <span className="font-bold underline decoration-green-500 decoration-3">
              create a sustainable future
            </span>{" "}
            for generations to come.
          </motion.p>
          <motion.button
            className="mt-4 px-24 py-5 bg-green-600 hover:bg-green-500 text-white font-semibold cursor-pointer z-0 transition-colors duration-300"
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 50, opacity: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a href="https://foe.org/">Join Community</a>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Impact;
