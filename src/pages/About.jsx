import React, { useState } from "react";
import { motion } from "framer-motion";

export const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = {
    mission: {
      title: "Our Mission",
      content:
        "To provide transformative education that empowers students to become innovative leaders, critical thinkers, and global citizens.",
    },
    history: {
      title: "Our History",
      content:
        "Founded in 1985, our institution has grown from a small college to a renowned center of academic excellence, serving thousands of students from diverse backgrounds.",
    },
    values: {
      title: "Core Values",
      content:
        "Integrity, Innovation, Inclusivity, Excellence, and Social Responsibility guide everything we do.",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          About Our College
        </h2>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="flex border-b">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full py-4 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tabs[tab].title}
              </button>
            ))}
          </div>
          <div className="p-8 text-center">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl text-gray-700"
            >
              {tabs[activeTab].content}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
