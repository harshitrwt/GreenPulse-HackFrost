import React from 'react';

const Impact = () => {
  return (
    <>
    
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/10/14/Pictures/plantation_6da01ad6-b09e-11e7-9bc1-6ddb500cf946.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-20"></div> {/* Optional overlay for better text visibility */}
      <div className="flex flex-col justify-center items-center h-full text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Make an <span className='font-bold underline decoration-green-500 decoration-6'>Impact</span> Today!</h1>
        <p className="text-lg md:text-xl mb-6 text-center px-4 max-w-lg">
          Join us in our mission to reduce carbon emissions and <span className='font-bold underline decoration-green-500 decoration-3'>create a sustainable future</span> for generations to come.
        </p>
        
        <button className="mt-4 px-24 py-5 bg-green-600 hover:bg-green-500 text-white font-semibold cursor-pointer z-0 transition-colors duration-300">
          <a href='https://foe.org/'>Join Community</a>
        </button>
        
      </div>
    </div>
    </>
    
  );
};

export default Impact;