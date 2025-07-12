import React from "react";
import { FaUsers, FaAward, FaCarSide, FaStar } from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <FaUsers size={32} />,
    number: 3000,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    icon: <FaAward size={32} />,
    number: 5,
    suffix: "+",
    label: "Industry Awards",
  },
  {
    icon: <FaCarSide size={32} />,
    number: 1000,
    suffix: "+",
    label: "Vehicles Transformed",
  },
  {
    icon: <FaStar size={32} />,
    number: 4.5,
    suffix: "/5",
    label: "Average Rating",
    decimals: 1,
  },
];

const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-[#1a0000] to-black text-white py-20 px-6 md:px-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Trusted By Thousands, <span className="text-red-600">Proven By Results</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mt-4">
          Our numbers speak for themselves. We are dedicated to delivering
          excellence in every detail.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center border border-red-700 rounded-xl p-6 bg-white/5 backdrop-blur-sm hover:shadow-xl hover:shadow-red-700/30 transition duration-300"
          >
            <div className="text-red-500 mb-3 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-4xl font-extrabold text-white">
              <CountUp
                end={item.number}
                duration={2}
                decimals={item.decimals || 0}
              />
              {item.suffix}
            </h3>
            <p className="text-sm text-gray-300 mt-2">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
