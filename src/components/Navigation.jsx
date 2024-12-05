import React from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const Navigation = ({ setActiveSection }) => {
  const handleNavigation = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">College Name</div>
        <div className="hidden md:flex space-x-8">
          {["home", "about", "programs", "gallery", "contacts"].map(
            (section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 hover:text-blue-500"
                onClick={() => handleNavigation(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            )
          )}
        </div>
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
