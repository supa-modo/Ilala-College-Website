import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Admissions = () => {
  const [step, setStep] = useState(1);

  const admissionSteps = [
    {
      name: "Apply Online / Download Application form",
      description:
        "For online applications, click on the Apply Now button and Navigate to the Application Page where you will follow the instructions to make a new application. If applying offline, you will need to download and print the application form from the downloads section below.",
    },
    {
      name: "Fill Application Form",
      description:
        "Complete the online application form with all the required accurate details for online applications. Fill in the all the required fields in the downloaded Application Form correctly if applying offline.",
    },
    {
      name: "Submit Application",
      description:
        "Upload any required documents and click on submit to complete the application online. If offline, once done filling the printed form, pay Tzs. 30,000 for the application through the details - '20510069050 NMB' then scan both the filled form, bank slip for payment and any other required document and send to 0745333883 or 074505870 via WhatsApp.",
    },
    {
      name: "Application Review",
      description:
        "Your submitted Application will be reviewed by the school administration and a decision made on the selection status.",
    },
    {
      name: "Final Selection",
      description:
        "If selected, you'll receive an admission offer and further instructions.",
    },
  ];

  const downloadLinks = [
    { name: "Application Form", url: "/downloads/application-form.pdf" },
    { name: "Medical Form", url: "/downloads/medical-form.pdf" },
    {
      name: "Joining Instructions",
      url: "/downloads/joining-instructions.pdf",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-200 py-10"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Admission Process
        </h2>

        <p className="text-xl text-gray-700 px-4 mb-4">
          Admission of students can be done in two ways when intakes are open.
          Check the steps below for guidance.
        </p>

        {/* Steps Section */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <div className="flex justify-between mb-8">
            {admissionSteps.map((admissionStep, index) => (
              <div
                key={admissionStep.name}
                className={`flex flex-col items-center font-semibold ${
                  index + 1 <= step ? "text-green-700" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full mb-2 flex items-center justify-center border-2 ${
                    index + 1 <= step
                      ? "bg-green-700 text-white border-green-700"
                      : "border-gray-300"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="text-center">{admissionStep.name}</span>
              </div>
            ))}
          </div>

          {/* Description Section */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 font-semibold max-w-4xl mx-auto">
              {admissionSteps[step - 1].description}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setStep(Math.max(step - 1, 1))}
              className={`px-6 py-3 flex rounded-lg font-semibold ${
                step > 1
                  ? "bg-green-700 text-white hover:bg-green-600"
                  : "bg-gray-300 text-gray-400 cursor-not-allowed"
              }`}
              disabled={step === 1}
            >
              <ChevronLeft className="mr-2" />
              Prev
            </button>

            <button
              onClick={() => setStep(Math.min(step + 1, admissionSteps.length))}
              className={`px-5 py-3 rounded-lg flex font-semibold ${
                step < admissionSteps.length
                  ? "bg-green-700 text-white hover:bg-green-600"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
              disabled={step === admissionSteps.length}
            >
              {step < admissionSteps.length ? "Next" : "Complete"}
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* Downloads Section */}
        <div className="mt-10 bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-center text-green-700 mb-6">
            Document Downloads
          </h3>
          <ul className="space-y-4">
            {downloadLinks.map((link, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-lg hover:shadow-lg transition"
              >
                <span className="text-lg font-semibold text-gray-700">
                  {link.name}
                </span>
                <a
                  href={link.url}
                  download
                  className="bg-green-700 font-semibold text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
