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

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/campus1.jpg",
    "/campus2.jpg",
    "/campus3.jpg",
    "/campus4.jpg",
    "/campus5.jpg",
    "/campus6.jpg",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto p-6"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Campus Gallery</h2>

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
