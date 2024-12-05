import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/images/college11.jpg";

// Home Page
export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-5xl font-bold text-green-700 mb-6"
            >
              Welcome to Our College
            </motion.h1>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-gray-700 mb-8"
            >
              Empowering minds, shaping futures. Discover excellence in
              education, research, and personal growth.
            </motion.p>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex space-x-4"
            >
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Explore Programs
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Apply Now
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="hidden md:block"
            transition={{ delay: 0.6 }}
          >
            <img
              src={heroImage}
              alt="College Campus"
              className="rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
