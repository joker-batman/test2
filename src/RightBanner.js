import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Array of objects containing images and their corresponding descriptions
const imageDescriptionPairs = [
  {
    image: '/images/7.jpg',
    description: 'A birthday without magic is like a wizard without a wand.'
  },
  {
    image: '/images/yule.jpeg',
    description: 'Let’s celebrate it like Yule Ball.'
  },
  {
    image: '/images/celeb.jpeg',
    description: 'The wizarding world celebrates today and you are the reason.'
  },
  {
    image: '/images/6.jpg',
    description: 'You are a wizard and today is your day! So here is your Present.'
  },
  {
    image: 'images/tri.jpeg',
    description: 'May your birthday be as legendary as the Triwizard Tournament!'
  }
];

const RightBanner = () => {
  const [currentPair, setCurrentPair] = useState(imageDescriptionPairs[0]);

  useEffect(() => {
    const changeImageAndDescription = () => {
      const randomIndex = Math.floor(Math.random() * imageDescriptionPairs.length);
      setCurrentPair(imageDescriptionPairs[randomIndex]);
    };

    changeImageAndDescription(); // Set initial pair
    const intervalId = setInterval(changeImageAndDescription, 3000); // Change pair every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="right-banner-container">
      <motion.div
        className="right-banner-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] rounded-lg z-0"></div>
        <div className="relative z-10 flex flex-col justify-center items-center space-y-4">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-center leading-tight">
            Happy Birthday!
          </h1>
          <p className="text-white text-sm md:text-base lg:text-lg text-center">
            {currentPair.description}
          </p>
          <img
            src={currentPair.image}
            alt="Birthday related"
            className="w-full max-w-[400px] h-[150px] object-cover rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default RightBanner;
