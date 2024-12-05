import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Book,
  GraduationCap,
  Users,
  Mail,
  Phone,
  Send,
} from "lucide-react";

export const Academics = () => {
  const programs = [
    {
      icon: <Book />,
      name: "Undergraduate",
      description: "Diverse range of bachelor's programs across disciplines.",
    },
    {
      icon: <GraduationCap />,
      name: "Postgraduate",
      description: "Advanced degrees with research opportunities.",
    },
    {
      icon: <Users />,
      name: "Research",
      description: "Cutting-edge research across multiple domains.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Academic Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-xl transition"
            >
              <div className="mx-auto w-20 h-20 mb-6 flex items-center justify-center text-blue-600">
                {program.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-900">
                {program.name}
              </h3>
              <p className="text-gray-700">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
