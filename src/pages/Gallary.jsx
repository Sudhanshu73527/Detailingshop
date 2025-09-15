import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/autocar1.webp";
import img2 from "../assets/autocar2.webp";
import img3 from "../assets/autocar3.webp";
import img4 from "../assets/autocar4.webp";
import img5 from "../assets/autocar5.webp";
import img6 from "../assets/car1.jpg";
import img7 from "../assets/car2.jpg";
import img8 from "../assets/car5.webp";
import img9 from "../assets/car8.png";
import img10 from "../assets/carspa2.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Gallary = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 px-4 md:px-12 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-red-200 blur-3xl opacity-30 rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-200 blur-3xl opacity-30 rounded-full -z-10"></div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 drop-shadow-lg"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        🚗 Our <span className="italic">Car Spa Gallery</span>
      </motion.h2>

      {/* Playful Paragraph */}
      <motion.p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Warning: These pictures might make you want to book an appointment immediately.  
        Our cars shine so bright, they put diamonds to shame 💎✨.
      </motion.p>

      {/* Image Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
            whileHover={{ scale: 1.06, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedImage(img)}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img
              src={img}
              alt={`Car ${index + 1}`}
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-all duration-300 group-hover:brightness-110 group-hover:scale-110"
            />
            {/* Overlay effect on hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-white font-semibold text-lg">
              Click to Zoom 🔍
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Zoomed Car"
              className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallary;
