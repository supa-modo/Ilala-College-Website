import React, { useState, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabsNavigation } from "../components/TabsNavigation";

// Direct ES6 imports for images
import college1Path from "../assets/images/ilalaEx0.jpeg";
import college2Path from "../assets/images/ilalaEx4.jpeg";
import college3Path from "../assets/images/ilalaEx2.jpg";
import college4Path from "../assets/images/ilalaEx7.jpeg";
import college5Path from "../assets/images/ilalaEx9.jpeg";
import college6Path from "../assets/images/ilalaEx3.jpeg";
import college7Path from "../assets/images/ilalaEx6.jpeg";
import college8Path from "../assets/images/ilalaEx11.jpeg";
import college9Path from "../assets/images/ilalaEx8.jpeg";
import college10Path from "../assets/images/ilalaEx01.jpeg";
import college11Path from "../assets/images/ilalaEx10.jpeg";

// Placeholder component for loading state
const ImagePlaceholder = () => (
  <div className="w-full h-48 md:h-64 bg-gray-200 animate-pulse rounded-lg"></div>
);

// Lazy-loaded image component
const LazyImage = ({ src, alt, onClick }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className="w-full h-48 md:h-64 object-cover rounded-lg cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      loading="lazy"
    />
  );
};

export const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState("Campus Life");
  const [selectedImage, setSelectedImage] = useState(null);

  // Categorized images with paths
  const imageCategories = {
    "Campus Life": [
      { image: college1Path, id: "campus1" },
      { image: college2Path, id: "campus2" },
      { image: college3Path, id: "campus3" },
      { image: college4Path, id: "campus4" },
      { image: college5Path, id: "campus5" },
      { image: college6Path, id: "campus6" },
      { image: college7Path, id: "campus7" },
      { image: college9Path, id: "campus9" },
      { image: college10Path, id: "campus10" },
      { image: college11Path, id: "campus11" },
      { image: college3Path, id: "campus3-repeat" },
      { image: college4Path, id: "campus4-repeat" },
      { image: college5Path, id: "campus5-repeat" },
      { image: college4Path, id: "campus4-repeat2" },
      { image: college2Path, id: "campus2-repeat2" },
      { image: college8Path, id: "campus8" },
    ],
    Events: [
      { image: college6Path, id: "events1" },
      { image: college1Path, id: "events2" },
      { image: college2Path, id: "events3" },
      { image: college3Path, id: "events4" },
      { image: college4Path, id: "events5" },
      { image: college5Path, id: "events6" },
      { image: college9Path, id: "events7" },
      { image: college4Path, id: "events8" },
      { image: college2Path, id: "events9" },
      { image: college7Path, id: "events10" },
      { image: college8Path, id: "events11" },
    ],
    Academics: [
      { image: college9Path, id: "academic1" },
      { image: college1Path, id: "academic2" },
      { image: college2Path, id: "academic3" },
      { image: college3Path, id: "academic4" },
      { image: college4Path, id: "academic5" },
      { image: college5Path, id: "academic6" },
      { image: college4Path, id: "academic7" },
      { image: college2Path, id: "academic8" },
    ],
  };

  // Tabs array
  const tabs = ["Campus Life", "Events", "Academics"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8 min-h-screen"
    >
      <h2 className="text-3xl font-bold mb-6 text-secondary text-center">
        Ilala Campus City Institute Gallery
      </h2>
      {/* Tabs Navigation */}
      <TabsNavigation
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      {/* Image Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {imageCategories[selectedTab].map((imageObj) => (
            <LazyImage
              key={imageObj.id}
              src={imageObj.image}
              alt={`${selectedTab} image`}
              onClick={() => setSelectedImage(imageObj.image)}
            />
          ))}
        </motion.div>
      </AnimatePresence>
      {/* Lightbox for Selected Image */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Selected campus image"
            className="max-w-full max-h-full object-contain"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Gallery;
