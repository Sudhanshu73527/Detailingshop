import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg1 from "../../assets/car1.jpg";
import heroImg2 from "../../assets/car2.jpg";
import heroImg3 from "../../assets/car1.jpg";

const images = [heroImg1, heroImg2, heroImg3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const headline = "Premium Auto Detailing";
  const description =
    "Bring back the showroom shine! We specialize in car & bike detailing, deep cleaning, ceramic coating, and much more — tailored to give your ride the care it deserves.";

  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Image */}
      <img
        src={images[currentImage]}
        alt="Auto Detailing Background"
        className="absolute inset-0 w-full h-full object-cover brightness-50 blur-[2px] scale-110 transition-all duration-1000"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-yellow-400">
            {headline}
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
            {description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl shadow-md transition"
          >
            Book Your Appointment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
