import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Stay Connected</h2>
            <p className="mt-2">Join our newsletter to stay updated on our initiatives.</p>
            <form className="mt-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="p-2 rounded-l-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold p-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>

    

          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter-squared.png" alt="Twitter" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p>&copy; {new Date().getFullYear()} GreenPulse, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

