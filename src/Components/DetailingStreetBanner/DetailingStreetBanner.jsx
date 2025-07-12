import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import bgTexture from "../../assets/sand.jpg"; // Replace with your asphalt texture
import carTopView from "../../assets/car8.png"; // Car top image like shown

const DetailingStreetBanner = () => {
  const controls = useAnimation();
  const [direction, setDirection] = useState("forward");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "forward" ? "backward" : "forward"));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      x: direction === "forward" ? 0 : "-100%",
      opacity: direction === "forward" ? 1 : 0,
      transition: { duration: 2, ease: "easeInOut" },
    });
  }, [direction, controls]);

  return (
    <section
      className="w-full h-[280px] md:h-[320px] relative bg-cover bg-center px-4 md:px-10 overflow-hidden"
      style={{ backgroundImage: `url(${bgTexture})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20 z-0" />

      <div className="relative z-10 w-full h-full flex items-center">
        <motion.div
          animate={controls}
          className="flex items-center gap-2 md:gap-6 whitespace-nowrap"
        >
          <h1 className="text-[32px] md:text-[80px] font-black uppercase tracking-wide">
            <span className="text-red-600">God-</span>
            <span className="text-gray-800">Detailing</span>
          </h1>
          <img
            src={carTopView}
            alt="Top Car View"
            className="h-[50px] md:h-[240px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DetailingStreetBanner;
