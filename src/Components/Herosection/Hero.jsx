import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg1 from "../../assets/car1.jpg";
import heroImg2 from "../../assets/car2.jpg";
import heroImg3 from "../../assets/car1.jpg";
import { FaArrowRight } from "react-icons/fa";

const images = [heroImg1, heroImg2, heroImg3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden text-white font-sans">
      {/* Background Image */}
      <img
        src={images[currentImage]}
        alt="Auto Detailing Background"
        className="absolute inset-0 w-full h-full object-cover brightness-50 scale-110 transition-all duration-[2000ms]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#0f0f0f]/40 to-black/70 z-0" />

      {/* Content - Mobile Only */}
      <div className="relative z-10 container mx-auto px-5 md:px-10 py-12 flex items-center justify-center h-full md:hidden">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl text-center bg-black/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-50 via-orange-400 to-red-700 drop-shadow-md">
            God Premium Auto Detailing
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-200 leading-relaxed">
            Bring back the showroom shine! We specialize in car & bike
            detailing, deep cleaning, ceramic coating, and much more — tailored
            to give your ride the care it deserves.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition duration-300"
          >
            Book Your Appointment <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
