
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../assets/autocar1.webp"

const AboutPage = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen py-16 px-6 md:px-20 overflow-hidden">
      {/* Decorative Background Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 w-[320px] h-[320px] bg-red-100 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-red-200 rounded-full blur-3xl -z-10"
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-center text-gray-800 mb-14 leading-tight"
      >
        About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
          Auto Car Spa
        </span>
      </motion.h1>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Image with floating effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.img
            src={img}
            alt="Car Detailing"
            className="rounded-3xl shadow-2xl object-cover w-full h-[420px] hover:scale-[1.03] transition-transform duration-500"
            whileHover={{ rotate: 1, scale: 1.02 }}
          />
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-red-500/20 to-transparent blur-xl -z-10" />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-gray-700"
        >
          <p className="text-lg leading-relaxed">
            At{" "}
            <span className="font-semibold text-red-600 drop-shadow-sm">
              Auto Car Spa
            </span>
            , we are passionate about transforming every vehicle into a work of
            art. With years of expertise in detailing, ceramic coating, and paint
            protection, we ensure your ride always looks brand-new.
          </p>

          <p className="text-lg leading-relaxed">
            Our skilled team uses premium products, cutting-edge techniques, and
            meticulous attention to detail to restore that showroom shine.
          </p>

          {/* Services Glass Cards */}
          <div className="grid sm:grid-cols-2 gap-5 mt-6">
            {[
              "Professional Car & Bike Detailing",
              "Ceramic Coating & Paint Protection",
              "Steam Cleaning & Interior Detailing",
              "100% Customer Satisfaction Guarantee",
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="backdrop-blur-lg bg-white/70 rounded-2xl shadow-lg hover:shadow-xl p-5 flex items-center gap-3 hover:scale-[1.04] transition-all duration-300 border border-gray-100"
              >
                <span className="text-red-600 text-2xl">✅</span>
                <p className="text-gray-800 font-medium">{service}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Call-to-Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-16"
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Give Your Car the Care It Deserves 🚗✨
        </motion.h3>
        <Link
          to="/booking"
          className="inline-block bg-gradient-to-r from-red-500 to-red-700 text-white px-10 py-4 rounded-3xl font-semibold shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
        >
          Book Your Appointment
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutPage;

