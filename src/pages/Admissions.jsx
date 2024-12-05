import React, { useState } from "react";
import { motion } from "framer-motion";

export const Admissions = () => {
  const [step, setStep] = useState(1);

  const admissionSteps = [
    "Apply Online",
    "Submit Documents",
    "Entrance Exam",
    "Interview",
    "Final Selection",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Admission Process
        </h2>

        <div className="bg-white shadow-lg rounded-xl p-8">
          <div className="flex justify-between mb-8">
            {admissionSteps.map((admissionStep, index) => (
              <div
                key={admissionStep}
                className={`flex flex-col items-center ${
                  index + 1 <= step ? "text-blue-600" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full mb-2 flex items-center justify-center border-2 ${
                    index + 1 <= step
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300"
                  }`}
                >
                  {index + 1}
                </div>
                <span>{admissionStep}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setStep(Math.min(step + 1, admissionSteps.length))}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
