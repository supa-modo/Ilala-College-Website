import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const galleryCategories = [
  {
    name: "Campus Life",
    images: [
      "/images/campus1.jpg",
      "/images/campus2.jpg",
      "/images/campus3.jpg",
    ],
  },
  {
    name: "Events",
    images: ["/images/event1.jpg", "/images/event2.jpg", "/images/event3.jpg"],
  },
  {
    name: "Academics",
    images: [
      "/images/academic1.jpg",
      "/images/academic2.jpg",
      "/images/academic3.jpg",
    ],
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Campus Gallery</h2>

        <Tabs defaultValue="Campus Life" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            {galleryCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {galleryCategories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delayChildren: 0.3,
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {category.images.map((image, index) => (
                  <Dialog key={index}>
                    <DialogTrigger>
                      <motion.img
                        src={image}
                        alt={`${category.name} ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: {
                            opacity: 1,
                            y: 0,
                          },
                        }}
                        onClick={() => setSelectedImage(image)}
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <img
                        src={selectedImage || image}
                        alt="Enlarged view"
                        className="w-full max-h-[80vh] object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default GallerySection;
