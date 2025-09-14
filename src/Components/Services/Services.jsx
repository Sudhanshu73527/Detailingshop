import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import wash from "../../assets/wash.webp"; // you can replace images for each service
import steam from "../../assets/steam.jpeg";
import Ceramic from "../../assets/creamicc.jpg";
import Ppf from "../../assets/ppf.webp";

const services = [
  { title: "Car Wash & Services", image: wash, description: "Complete exterior and interior car wash with premium shampoos for a spotless finish." },
  { title: "Foam Wash", image: wash, description: "Thick snow foam wash that gently removes dirt without scratching your car’s paint." },
  // { title: "Paint Correction", image: spray, description: "Removes swirl marks, light scratches, and oxidation for a glossy finish." },
  { title: "Interior Detailing", image: steam, description: "Deep cleaning of dashboard, seats, carpets, vents, and trims for a fresh cabin." },
  { title: "Steam Cleaning", image: steam, description: "Eco-friendly steam cleaning for sanitizing and removing stubborn stains." },
  { title: "Clay Bar Treatment", image: wash, description: "Removes embedded contaminants from the paint surface for silky-smooth finish." },
  { title: "Headlight Restoration", image: wash, description: "Restores cloudy headlights, improving clarity and nighttime visibility." },
  { title: "Wheel Polishing", image: wash, description: "Brings back shine to your alloy wheels and removes brake dust buildup." },
  { title: "Ceramic Coating", image: Ceramic, description: "Premium ceramic coating for long-lasting shine, hydrophobic effect, and paint protection." },
  { title: "PPF Coating", image: Ppf, description: "Self-healing Paint Protection Film to protect against scratches, chips, and UV damage." },
  { title: "Graphene Coating", image: Ceramic, description: "Advanced graphene-based coating for extreme gloss, durability, and water repellency." },
  { title: "Carbon Coating", image: Ceramic, description: "Durable carbon coating to keep your paint safe and looking new for years." },
  { title: "Polymer Coating", image: Ceramic, description: "Cost-effective coating solution for gloss and basic paint protection." },
  { title: "Carnauba Wax", image: Ceramic, description: "High-quality carnauba wax for a warm, deep shine and water beading effect." },
  { title: "AC Vent & Coil Cleaning", image: steam, description: "Cleans AC vents and coils to improve airflow and eliminate odor-causing bacteria." },
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
          Premium automotive care services designed to enhance, protect, and rejuvenate your car inside and out.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {services.map((service, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={index}
            tabIndex={0}
            className="group bg-gradient-to-br from-neutral-800 to-black rounded-xl overflow-hidden border border-neutral-700 hover:shadow-lg hover:shadow-red-500/100 transition duration-300 flex flex-col"
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
                <p className="text-sm text-gray-400">{service.description}</p>
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
