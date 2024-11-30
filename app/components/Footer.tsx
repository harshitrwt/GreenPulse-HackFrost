import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('Invalid email address.');
      return;
    }

    setStatus('Submitting...');
    try {
      
      await new Promise((resolve) => setTimeout(resolve, 1000)); 
      setStatus('Thank you for subscribing!');
      setEmail(''); 
    } catch (error) {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Stay Connected</h2>
            <p className="mt-2">Join us to stay updated on Environmental related Topics</p>
            <form className="mt-4" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="p-2 rounded-l-md border border-gray-600 focus:outline-none text-black focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold p-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
            
            {status && (
              <p className={`mt-2 ${status.includes('Invalid') || status.includes('wrong') ? 'text-red-500' : 'text-green-500'}`}>
                {status}
              </p>
            )}
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
