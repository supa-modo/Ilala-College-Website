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
      className="  py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-200 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Send us a Message or Enquiry
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-2 font-semibold">
                <label className="block mb-2 text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-gray-500 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                  required
                />
              </div>
              <div className="mb-2 font-semibold">
                <label className="block mb-2 text-gray-700">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-gray-500 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-6 font-semibold">
                <label className="block mb-2 text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition flex items-center justify-center"
              >
                <Send className="mr-2" /> Send Message
              </button>
            </form>
          </div>

          <div className="bg-gray-200 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-green-700">
              Contact Information
            </h3>
            <div className="space-y-4 font-semibold">
              <div className="flex items-center">
                <MapPin className="mr-4 text-green-600" />
                <span className="text-gray-500">
                  Plot No. 40, Block D Chanika - Street, Dar es Salam, Tanzania
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4 text-green-600" />
                <div className=" flex">
                  <span className="text-gray-500 mr-3">+255 745 333 833</span>
                  <Tally2 color="gray" />
                  <span className="text-gray-500">+255 679 288 333</span>
                  <Tally2 color="gray" />
                  <span className="text-gray-500">+255 696 150 150</span>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="mr-4 text-green-600" />
                <span className="text-gray-500">info@ilalacollege.ac.tz</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-14">
              <h3 className="text-lg font-semibold mb-4 text-gray-500">
                You can also find Us on our Social media below:
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-white transition"
                >
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-white transition"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-white transition"
                >
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-white transition"
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
