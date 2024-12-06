import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaBookmark } from "react-icons/fa";
import programs from "../data/programs.json";
import { LuComponent } from "react-icons/lu";

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
        <h2 className="text-3xl font-bold text-center text-secondary mb-12">
          Academic Programmes Offered
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-blue-100 p-8 rounded-xl text-center hover:shadow-xl transition"
            >
              <div className="mx-auto w-20 h-20 mb-2 flex items-center justify-center text-primary-lighter">
                {IconMap[program.icon]}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-secondary">
                {program.name}
              </h3>
              <ul className="text-gray-500 text-start px-2 font-semibold">
                {program.description.map((item, idx) => (
                  <li key={idx} className="flex mb-2">
                    <div className="flex-shrink-0">
                      <LuComponent
                        size={14}
                        className="text-green-700 mt-[6px] mr-2"
                      />
                    </div>
                    <div className="flex-grow">{item}</div>
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
