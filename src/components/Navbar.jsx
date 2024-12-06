import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programmes", path: "/programmes" },
    { name: "Admissions", path: "/admissions" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: "-20%",
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 md:py-1 px-4 md:px-4">
        {/* Logo and College Name */}
        <div
          className="flex items-center space-x-2 md:space-x-4 hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="School Logo" className="h-20 md:h-24 lg:h-24" />
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-primary-lighter w-2/3 md:w-full">
            City Institute of Health and Allied Sciences
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <motion.a
                href={item.path}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm lg:text-base text-gray-600 hover:text-primary font-semibold transition-colors"
              >
                {item.name}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={30} />}
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 md:hidden"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "start",
                justifyContent: "end",
                padding: "1rem",
              }}
            >
              <motion.div
                ref={menuRef}
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="w-64 bg-white rounded-lg shadow-2xl p-6 overflow-hidden"
              >
                {/* Close Button */}
                <div className="flex justify-end mb-4">
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-500 hover:text-primary"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{
                        x: 10,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="block text-lg text-gray-700 hover:text-primary font-medium transition-all"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
