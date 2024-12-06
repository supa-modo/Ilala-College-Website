import React from "react";
import { motion } from "framer-motion";
import { FaBook } from "react-icons/fa";
import { LuComponent } from "react-icons/lu";
import programs from "../data/programs.json";

const IconMap = {
  FaBook: <FaBook size={50} />,
};

export const Academics = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white py-6 rounded-b-3xl"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-8 md:mb-12">
          Academic Programmes Offered
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-blue-100 p-6 md:p-8 rounded-xl text-center hover:shadow-xl transition"
            >
              <div className="mx-auto w-16 h-16 md:w-20 md:h-20 mb-2 flex items-center justify-center text-primary-lighter">
                {IconMap[program.icon]}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-secondary">
                {program.name}
              </h3>
              <ul className="text-gray-500 text-start px-2 font-semibold space-y-2">
                {program.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <LuComponent
                      size={14}
                      className="text-green-700 mr-2 mt-1 flex-shrink-0"
                    />
                    <span className="flex-grow">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Academics;
