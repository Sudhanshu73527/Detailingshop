import React from "react";
import { FaUsers, FaCarSide, FaStar, FaAward } from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <FaUsers size={36} />,
    number: 2000,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    icon: <FaCarSide size={36} />,
    number: 1000,
    suffix: "+",
    label: "Vehicles Transformed",
  },
  {
    icon: <FaStar size={36} />,
    number: 4.3,
    suffix: "/5",
    label: "Average Rating",
    decimals: 1,
  },
  {
    icon: <FaAward size={36} />,
    number: 6,
    suffix: "+",
    label: "Years of Expertise",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-[#1a0000] to-black text-white py-20 px-6 md:px-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-red-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-wide">
          Trusted By Thousands,{" "}
          <span className="text-red-600">Proven By Results</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mt-4">
          Our numbers speak for themselves. We are committed to providing
          top-quality detailing services that exceed expectations.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="text-center border border-red-600 rounded-2xl p-8 bg-gradient-to-br from-red-900/20 to-transparent backdrop-blur-md hover:shadow-lg hover:shadow-red-600/40 transition-all duration-300"
          >
            <div className="text-red-500 mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
              <CountUp
                end={item.number}
                duration={2}
                decimals={item.decimals || 0}
              />
              {item.suffix}
            </h3>
            <p className="text-sm md:text-base text-gray-300 mt-3 font-medium">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
