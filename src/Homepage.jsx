import React, { useState } from "react";
import Navigation from "./components/Navigation";
// import Hero from "./components/Hero";
// import AboutSection from "./components/AboutSection";
// import GallerySection from "./components/GallerySection";
// import ProgramsSection from "./components/ProgramsSection";
// import Footer from "./components/Footer";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/Card";
import { AboutSection, Footer, Hero, ProgramsSection } from "./components/Hero";

const CollegeWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />

          <AboutSection />

          <ProgramsSection />

          {/* <GallerySection /> */}

          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CollegeWebsite;
