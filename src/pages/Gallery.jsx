import React, { useState } from "react";
import { motion } from "framer-motion";
import college1 from "../assets/images/college3.jpg";
import college2 from "../assets/images/college4.jpg";
import college3 from "../assets/images/college5.jpg";
import college4 from "../assets/images/college2.jpg";
import college5 from "../assets/images/college1.jpg";
import college9 from "../assets/images/college0.jpg";
import college6 from "../assets/images/college12.jpg";
import college7 from "../assets/images/college13.jpg";
import college8 from "../assets/images/college15.jpg";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    college1,
    college2,
    college3,
    college4,
    college5,
    college6,
    college7,
    college8,
    college9,
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto p-6"
    >
      <h2 className="text-3xl font-bold mb-6 text-red-700 text-center">
        Ilala Campus City Institute Gallery
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Campus image ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Selected campus image"
            className="max-w-full max-h-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};
