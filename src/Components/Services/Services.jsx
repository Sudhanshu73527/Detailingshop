import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import Ceramic from "../../assets/creamicc.jpg";
import Ppf from "../../assets/ppf.webp";
import Spray from "../../assets/spray.jpg";
import windoww from "../../assets/windoww.webp";
import steam from "../../assets/steam.jpeg";
import wash from "../../assets/wash.webp";

const services = [
  {
    title: "Ceramic Coating",
    image: Ceramic,
    description:
      "Cosmetica & Opti-Coat for long-lasting paint shine. Super gloss and hydrophobic finish.",
    category: "safe",
  },
  {
    title: "Paint Protection Film (PPF)",
    image: Ppf,
    description:
      "UltrashieldX PPF with self-healing properties. Click for detailed PPF packages.",
    category: "safe",
  },
  {
    title: "Spray-On PPF / Peelable Paint",
    image: Spray,
    description:
      "Customizable color and finish options. Durable and removable protection.",
    category: "safe",
  },
  {
    title: "Window Films",
    image: windoww,
    description:
      "UV and heat protection films. Enhances privacy and comfort. Click for film options.",
    category: "safe",
  },
  {
    title: "Steam Wash",
    image: steam,
    description:
      "Eco-friendly deep cleaning for exterior and interior. Sanitizes and refreshes.",
    category: "ravi",
  },
  {
    title: "Maintenance Wash",
    image: wash,
    description:
      "Regular upkeep to maintain vehicle appearance. Keeps your car looking its best.",
    category: "sunny",
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white py-12 px-4 md:px-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          <span className="text-white">OUR </span>
          <span className="text-red-600">SERVICES</span>
        </h2>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto text-sm">
          Discover a comprehensive range of professional automotive detailing
          services, meticulously designed to enhance, protect, and rejuvenate
          your vehicle.
        </p>
      </div>

      {/* Responsive grid: 1 column on mobile, 2 on small, 3 on medium+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {services.map((service, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={index}
            tabIndex={0}
            className="group bg-gradient-to-br from-neutral-800 to-black rounded-xl overflow-hidden border border-neutral-700 hover:shadow-lg hover:shadow-red-500/100 focus:shadow-red-500/30 active:shadow-red-500/30 transition duration-300 flex flex-col"
          >
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <FaArrowRight className="text-white text-lg" />
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-red-500 uppercase transition">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 transition">
                  {service.description}
                </p>
                <p className="mt-2 text-xs text-gray-500 uppercase">
                  Category: {service.category}
                </p>
              </div>
              <button className="mt-5 bg-red-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-red-700 transition self-start">
                View Package
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
