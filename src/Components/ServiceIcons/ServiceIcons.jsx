import React from "react";
import { motion } from "framer-motion";
import CeramicIcon from "../../assets/creamic.webp";
import ClarityIcon from "../../assets/Clarity.webp";
import PpfIcon from "../../assets/paint.webp";
import DentPaintIcon from "../../assets/CARDENTING.webp";
import WashIcon from "../../assets/CARWASh.webp";
import GlassIcon from "../../assets/glassfilm.webp";

const services = [
  { name: "CERAMIC COATING", icon: CeramicIcon },
  { name: "CLARITY COAT", icon: ClarityIcon },
  { name: "PAINT PROTECTION FILM", icon: PpfIcon },
  { name: "CAR DENTING PAINTING", icon: DentPaintIcon },
  { name: "CAR WASH", icon: WashIcon },
  { name: "GLASS FILM", icon: GlassIcon },
];

const ServiceIcons = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Where <span className="text-red-600 italic font-extrabold">The Real Magic</span> Happens
        </h2>
        <div className="mt-2 w-16 h-1 bg-red-600 mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center text-center group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              whileTap={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-gray-600 flex items-center justify-center bg-black group-hover:bg-white active:bg-white transition-colors duration-300"
            >
              <img
                src={service.icon}
                alt={service.name}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
            </motion.div>
            <p className="mt-3 text-xs sm:text-sm font-semibold">{service.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceIcons;
