import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import college1 from "../assets/images/ilalaEx0.jpeg";
import college2 from "../assets/images/ilalaEx4.jpeg";
import college3 from "../assets/images/ilalaEx2.jpg";
import college4 from "../assets/images/ilalaEx7.jpeg";
import college5 from "../assets/images/ilalaEx9.jpeg";
import college6 from "../assets/images/ilalaEx3.jpeg";
import college7 from "../assets/images/ilalaEx6.jpeg";
import college8 from "../assets/images/ilalaEx11.jpeg";

export const About = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images - using placeholder images
  const carouselImages = [
    college1,
    college2,
    college3,
    college4,
    college5,
    college6,
    college7,
    college8,
  ];

  // Auto-switch carousel images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const tabs = {
    mission: {
      title: "Our Mission",
      content:
        "To provide transformative education that empowers students to become innovative leaders, critical thinkers, and global citizens. Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni omnis libero eaque modi, obcaecati aspernatur inventore, vel voluptatibus reiciendis labore illum blanditiis ea quae! Voluptatibus deserunt atque modi obcaecati.",
    },
    history: {
      title: "Our Vision",
      content:
        "Founded in 1985, our institution has grown from a small college to a renowned center of academic excellence, serving thousands of students from diverse backgrounds. Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni omnis libero eaque modi, obcaecati aspernatur inventore, vel voluptatibus reiciendis labore illum blanditiis ea quae! Voluptatibus deserunt atque modi obcaecati.",
    },
    values: {
      title: "Core Values",
      content:
        "Integrity, Innovation, Inclusivity, Excellence, and Social Responsibility guide everything we do. Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni omnis libero eaque modi, obcaecati aspernatur inventore, vel voluptatibus reiciendis labore illum blanditiis ea quae! Voluptatibus deserunt atque modi obcaecati.",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 rounded-t-3xl relative py-8 md:py-10"
    >
      {/* Top About Us Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gray-100 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-secondary mb-8 md:mb-12">
          About Our College
        </h2>

        {/* Responsive Tabs Section */}
        <div className="bg-white shadow-lg rounded-xl border-t border-t-gray-200 overflow-hidden mb-8 md:mb-12">
          <div className="flex md:flex-row border-b">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full font-semibold py-3 md:py-4 text-sm md:text-base ${
                  activeTab === tab
                    ? "bg-primary-light text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tabs[tab].title}
              </button>
            ))}
          </div>
          <div className="p-4 md:p-8 text-center">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-base md:font-normal font-semibold md:text-xl text-gray-500"
            >
              {tabs[activeTab].content}
            </motion.p>
          </div>
        </div>

        {/* History Section */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-primary-lighter px-4 mt-6 md:mt-10">
            History
          </h2>
          <div className="p-4 md:p-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-xl md:font-normal font-semibold text-gray-500"
            >
              Ilala City College of Health and Allied Sciences is a prestigious
              College was registered in March 2019 under the Business Names
              (Registration) Act (Cap. 213) with registration No.138920836. The
              college is located at Chanika Ward-Ilala Municipality -Dar es
              salaam City Tanzania and is comprised with the individuals
              dedicated to our vision, mission and values, and the application
              of the utmost professional practices and career training
              standards.
            </motion.p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <h2 className="text-xl md:text-3xl text-center font-bold text-green-700 px-4 mt-6 md:mt-10">
            Why Should You Choose City Institute of Health and Allied Sciences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-6">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:font-normal font-semibold text-gray-500 md:text-xl"
            >
              <p>
                <span className="font-semibold text-green-800">
                  City Institute of Health and Allied Sciences Ilala Campus
                </span>{" "}
                embraces innovation and utilizes the very latest methods of
                teaching, including simulated ward environments and
                purpose-built facilities.
              </p>
              <p className="mt-3 mb-3 md:mt-4 md:mb-4">
                Ilala City College creates and maintains a flexible and
                supportive educational environment where everyone can:
              </p>
              <ul className="list-disc list-inside space-y-1 font-semibold text-gray-500 md:space-y-2 text-sm md:text-lg">
                <li>Realize their full potential</li>
                <li>Easily express themselves</li>
                <li>Participate in group-based judgments</li>
                <li>Celebrate accomplishments</li>
                <li>Admit challenges</li>
                <li>Welcome change as a means for constant improvement</li>
              </ul>
            </motion.div>

            {/* Right Column - Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative overflow-hidden rounded-xl shadow-lg h-48 md:h-96"
            >
              {/* Carousel Images */}
              {carouselImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`College Campus ${index + 1}`}
                  className={`absolute w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Carousel Indicators */}
              <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                      index === currentImageIndex
                        ? "bg-primary-lighter"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
