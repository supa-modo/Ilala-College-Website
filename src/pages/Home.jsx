import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { About } from "../components/AboutUs";
import { Contact } from "./Contact";
import college1 from "../assets/images/college3.jpg";
import college2 from "../assets/images/college4.jpg";
import college3 from "../assets/images/college5.jpg";
import college4 from "../assets/images/college2.jpg";
import college5 from "../assets/images/college1.jpg";
import college9 from "../assets/images/college0.jpg";
import college6 from "../assets/images/college12.jpg";
import college7 from "../assets/images/college13.jpg";
import college8 from "../assets/images/college15.jpg";
import { Academics } from "./Academics";

export const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images - replace with actual college images
  const carouselImages = [
    college1,
    college2,
    college3,
    college4,
    college5,
    college6,
    college7,
    college8,
    college9,
  ];

  // Auto-switch carousel images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Carousel Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        {/* Background Images */}
        {carouselImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Campus Scene ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100 pointer-events-none"></div>

        {/* Carousel Indicators */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentImageIndex
                  ? "bg-white"
                  : "bg-gray-400 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Welcome Content Overlay */}
        <div className="absolute inset-0 flex items-center container mx-auto px-4 z-10">
          <div className="text-white max-w-2xl mt-10">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-5xl font-bold mb-6 drop-shadow-lg"
            >
              Welcome to City Institute of Health and Allied Sciences Ilala
              Campus
            </motion.h1>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl mb-8 text-gray-50 leading-relaxed drop-shadow-md"
            >
              Empowering minds, shaping futures. Discover excellence in
              education, research, and personal growth. Our commitment is to
              provide transformative learning experiences that prepare you for
              leadership in healthcare and beyond.
            </motion.p>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex space-x-4"
            >
              <button
                className="bg-green-700 text-white font-semibold px-6 py-3 rounded-lg 
                hover:bg-green-600 transition transform hover:scale-105 shadow-lg"
              >
                Explore Programs
              </button>
              <button
                className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg 
                hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
              >
                Apply Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Rest of the page on gray-100 background */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-16">
          <About />
          <hr />
          <Academics />

          {/* Join Us section */}
          <div>
            <h2 className="text-3xl font-bold text-center text-green-700 px-4 mt-10">
              Join Us
            </h2>
            <div className="p-4 text-center">
              <p className="text-xl text-gray-700 mb-3">
                Be part of a community where excellence meets opportunity! Apply
                now!!
              </p>
              <button
                className="bg-green-700 text-white font-semibold px-20 py-3 rounded-lg 
                hover:bg-green-600 transition transform hover:scale-105 shadow-lg"
              >
                Apply Now
              </button>
            </div>
          </div>

          <Contact />
        </div>
      </div>
    </motion.div>
  );
};
