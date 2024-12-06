import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, Tally2 } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-8 md:py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-primary-dark mb-8 md:mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Contact Form */}
          <div className="bg-gray-200 p-6 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-primary-dark text-center md:text-left">
              Send us a Message or Enquiry
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 md:px-4 md:py-2 text-gray-500 text-base md:text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700 font-semibold">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 md:px-4 md:py-2 text-gray-500 text-base md:text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-gray-700 font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-light text-white font-semibold py-2 md:py-3 rounded-lg hover:bg-primary-lighter hover:shadow-xl transition flex items-center justify-center"
              >
                <Send className="mr-2 w-4 h-4 md:w-5 md:h-5" /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-200 p-6 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-primary-light text-center md:text-left">
              Contact Information
            </h3>
            <div className="space-y-4 font-semibold">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <MapPin className="mb-2 md:mr-4 text-primary-lighter w-6 h-6" />
                <span className="text-gray-500 text-center md:text-left">
                  Plot No. 40, Block D Chanika - Street, Dar es Salam, Tanzania
                </span>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <Phone className="mb-2 md:mr-4 text-primary-lighter w-6 h-6" />
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">+255 745 333 833</span>
                    <Tally2 color="gray" className="w-4 h-4" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">+255 679 288 333</span>
                    <Tally2 color="gray" className="w-4 h-4" />
                  </div>
                  <span className="text-gray-500">+255 696 150 150</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <Mail className="mb-2 md:mr-4 text-primary-lighter w-6 h-6" />
                <span className="text-gray-500">info@ilalacollege.ac.tz</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-8 md:pt-14">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-500 text-center md:text-left">
                You can also find Us on our Social media below:
              </h3>
              <div className="flex justify-center md:justify-start space-x-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light hover:text-white transition"
                >
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light hover:text-white transition"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light hover:text-white transition"
                >
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light hover:text-white transition"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
