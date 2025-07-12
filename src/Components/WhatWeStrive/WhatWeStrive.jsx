import React, { useState } from "react";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import carImage from "../../assets/car4.webp";
import GalleryModal from "../GalleryModal/GalleryModal";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const WhatWeStrive = () => {
  const [showModal, setShowModal] = useState(false);

  const paragraph1 =
    "At The Detailing Mafia,  your car’s personality — turning nice ride into jaw-dropping beauty. We don’t settle for clean; we deliver extraordinary.";
  const paragraph2 =
    "Our ceramic coating and paint protection film services are precision-driven. Let our skilled artists treat your vehicle with glossy perfection.";
  const paragraph3 =
    "Leave your car with us and prepare to pick up a masterpiece. We revive, restore, and reimagine — every time.";

  const tooltipMap = {
    "Detailing": "The art of perfect car surface restoration.",
    "Mafia": "Our elite detailing crew.",
    "ceramic": "Advanced nano-coating for long-term shine.",
    "coating": "Protective layer that bonds with paint.",
    "film": "Invisible shield against scratches & UV.",
    "protection": "Guards paint from elements & debris.",
  };

  const renderWithTooltips = (text) =>
    text.split(" ").map((word, idx) => {
      const clean = word.replace(/[^\w]/g, "");
      const tip = tooltipMap[clean];
      return tip ? (
        <Tippy key={idx} content={tip}>
          <span className="underline underline-offset-2 decoration-dotted font-semibold cursor-help text-black">
            {word}{" "}
          </span>
        </Tippy>
      ) : (
        <span key={idx}>{word} </span>
      );
    });

  return (
    <section className="relative bg-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-red-100 opacity-30 blur-3xl rounded-full z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-white opacity-60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="border-l-8 border-red-600 pl-6 mb-4"
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-1">
              What do we strive for?
            </h2>
            <h3 className="text-2xl md:text-4xl text-red-600 font-bold italic relative inline-block">
              Detailing at its Finest!
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-600 animate-pulse rounded-full" />
            </h3>
          </motion.div>

          <motion.p
            className="mt-6 text-gray-700 text-base leading-relaxed tracking-wide"
            variants={fadeUp}
          >
            {renderWithTooltips(paragraph1)}
          </motion.p>

          <motion.p
            className="mt-4 text-gray-700 text-base leading-relaxed tracking-wide"
            variants={fadeUp}
          >
            {renderWithTooltips(paragraph2)}
          </motion.p>

          <motion.p
            className="mt-4 text-gray-700 text-base leading-relaxed tracking-wide"
            variants={fadeUp}
          >
            {renderWithTooltips(paragraph3)}
          </motion.p>

          <motion.p
            className="mt-6 text-lg font-semibold text-black"
            variants={fadeUp}
          >
            Give your neighbours something to talk about.
          </motion.p>

          <motion.div
            className="mt-8"
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setShowModal(true)}
              className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-red-700 transition"
            >
              View Gallery
            </button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <motion.img
            src={carImage}
            alt="Supercar"
            className="w-[100%] max-w-[600px] object-contain rounded-xl "
            whileHover={{
              scale: 1.05,
              rotate: [0, 1, -1, 0],
              transition: { type: "spring", stiffness: 200 },
            }}
          />
        </motion.div>
      </div>

      {/* Gallery Modal */}
      {showModal && <GalleryModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default WhatWeStrive;