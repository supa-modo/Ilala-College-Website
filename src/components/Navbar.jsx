import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="School Logo" className="h-24" />
          <h1 className="text-3xl font-bold text-green-700">
            City Institute of Health and Allied Sciences
          </h1>
        </div>
        <ul className="flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Academics", path: "/academics" },
            { name: "Admissions", path: "/admissions" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.path}>
              <motion.a
                href={item.path}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-green-700 font-semibold transition-colors"
              >
                {item.name}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
