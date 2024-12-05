import React from "react";
import { motion } from "framer-motion";

// Navigation Component
export const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Programs", section: "programs" },
    { name: "Gallery", section: "gallery" },
    { name: "Contact", section: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-primary">College Name</div>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.section}
              className={`
                px-3 py-2 
                ${
                  activeSection === item.section
                    ? "text-primary font-bold"
                    : "text-gray-600 hover:text-primary"
                }
              `}
              onClick={() => setActiveSection(item.section)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Hero Component
export const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/path/to/hero-image.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">Discover Your Potential</h1>
        <p className="text-xl mb-8">Empowering Education, Inspiring Futures</p>
        <div className="space-x-4">
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark">
            Apply Now
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
            Explore Programs
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// About Section Component
export const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          About Our College
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Our college is committed to providing world-class education,
              fostering innovation, and preparing students for successful
              careers.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Cutting-edge facilities</li>
              <li>✓ Expert faculty</li>
              <li>✓ Diverse academic programs</li>
            </ul>
          </div>
          <div>
            <img
              src="/path/to/about-image.jpg"
              alt="College Campus"
              className="rounded-lg shadow-custom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Programs Section Component
export const ProgramsSection = () => {
  const programs = [
    {
      name: "Computer Science",
      description: "Cutting-edge technology and innovation",
      icon: "💻",
    },
    {
      name: "Business Administration",
      description: "Leadership and strategic thinking",
      icon: "📊",
    },
    {
      name: "Arts & Humanities",
      description: "Creativity and cultural understanding",
      icon: "🎨",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-6xl mb-4">{program.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{program.name}</h3>
              <p className="text-gray-600">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p>123 College Street</p>
            <p>City, State 12345</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Campus Life
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons */}
              <a href="#" className="hover:text-primary">
                Facebook
              </a>
              <a href="#" className="hover:text-primary">
                Twitter
              </a>
              <a href="#" className="hover:text-primary">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
