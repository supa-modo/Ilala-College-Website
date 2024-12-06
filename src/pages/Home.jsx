import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { About } from "../components/AboutUs";
import { Contact } from "./Contact";
import college1 from "../assets/images/ilalaEx0.jpeg";
import college2 from "../assets/images/ilalaEx01.jpeg";
import college3 from "../assets/images/ilalaEx2.jpg";
import college4 from "../assets/images/ilalaEx7.jpeg";
import college5 from "../assets/images/ilalaEx9.jpeg";
import college9 from "../assets/images/college4.jpg";
import college6 from "../assets/images/ilalaEvent9.jpeg";
import college7 from "../assets/images/college15.jpg";
import college8 from "../assets/images/college12.jpg";
import { Academics } from "./Programmes";

export const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  // Responsive image handling
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

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {/* Responsive Carousel Section */}
      <div className="relative h-[60vh] sm:h-[50vh] md:h-[60vh] lg:h-[63vh] w-full overflow-hidden">
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

        {/* Responsive Carousel Indicators */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
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
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-lg text-center sm:text-left"
            >
              Welcome to City Institute of Health and Allied Sciences Ilala
              Campus
            </motion.h1>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-base sm:text-lg md:text-xl mb-6 text-gray-50 leading-relaxed drop-shadow-md text-center sm:text-left"
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
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start items-center"
            >
              <button
                onClick={() => navigate("/programmes")}
                className="w-full sm:w-auto bg-primary-light text-white font-semibold 
                px-6 py-3 rounded-lg hover:bg-secondary transition transform 
                hover:scale-105 shadow-lg"
              >
                Explore Our Programmes
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://application.cityinstitute.ac.tz/",
                    "_blank"
                  )
                }
                className="w-full sm:w-auto bg-white text-secondary font-semibold 
                px-14 py-3 rounded-lg hover:bg-gray-100 transition transform 
                hover:scale-105 shadow-lg"
              >
                Apply Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Rest of the page on gray-100 background */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 pb-8 sm:pb-10 md:pb-12">
          <About />
          <hr className="" />
          <Academics />

          {/* Responsive Join Us section */}
          <div className="px-4 py-8 sm:py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-secondary mb-6">
              Join Us
            </h2>
            <div className="max-w-xl mx-auto text-center">
              <p className="text-base sm:text-xl text-gray-700 mb-6">
                Be part of a community where excellence meets opportunity! Apply
                now!!
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://application.cityinstitute.ac.tz/",
                    "_blank"
                  )
                }
                className="w-full sm:w-auto bg-primary-light text-white font-semibold 
                px-12 sm:px-20 py-3 rounded-lg hover:bg-primary-lighter 
                transition transform hover:scale-105 shadow-lg"
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
