import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import bgTexture from "../../assets/sand.jpg"; // Replace with your background texture
import carTopView from "../../assets/car8.png"; // Car top view image

const DetailingStreetBanner = () => {
  const controls = useAnimation();
  const carControls = useAnimation();
  const [direction, setDirection] = useState("forward");

  // Toggle direction every 5s for sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "forward" ? "backward" : "forward"));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate banner text + container
  useEffect(() => {
    controls.start({
      x: direction === "forward" ? 0 : "-100%",  
      opacity: direction === "forward" ? 1 : 0,  
      transition: { duration: 1.8, ease: "easeInOut" },   
    });
  }, [direction, controls]); 

  // Floating car animation (infinite loop)
  useEffect(() => {
    carControls.start({
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
    });
  }, [carControls]);

  return (
    <section
      className="relative w-full h-[280px] md:h-[360px] bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bgTexture})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10 z-0" />

      {/* Main Content */}
      <div className="relative z-10 w-full flex justify-center md:justify-start px-4 md:px-12">
        <motion.div
          animate={controls}
          className="flex flex-col md:flex-row items-center gap-3 md:gap-6 whitespace-nowrap"
        >
          {/* Animated Text */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[28px] md:text-[80px] font-black uppercase tracking-wide text-center md:text-left leading-tight"
          >
            <span className="text-red-600 drop-shadow-md">Auto-</span>
            <span className="text-white drop-shadow-md">Car Spa</span>
          </motion.h1>

          {/* Floating Car */}
          <motion.img
            src={carTopView}
            alt="Top Car View"
            animate={carControls}
            className="h-[80px] md:h-[240px] object-contain drop-shadow-lg"
          />
        </motion.div>
      </div>

      {/* Decorative Road Effect (Optional) */}
      <div className="absolute bottom-0 w-full h-[4px] bg-gradient-to-r from-red-500 to-yellow-500 animate-pulse" />
    </section>
  );
};

export default DetailingStreetBanner;
