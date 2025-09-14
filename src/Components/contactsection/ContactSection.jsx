import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const contactItems = [
  {
    icon: <FaPhoneAlt size={28} />,
    title: "Call Us",
    content: "+91 98890 49889",
  },
  {
    icon: <FaEnvelope size={28} />,
    title: "Email Us",
    content: "autocarspa989@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt size={28} />,
    title: "Visit Us",
    content: "Gorakhpur, Uttar Pradesh",
  },
  {
    icon: <FaClock size={28} />,
    title: "Working Hours",
    content: "Mon - Sun: 9 AM - 8 PM",
  },
];

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-b from-black to-[#111827] text-white py-16 px-4 md:px-12">
      {/* Heading Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold">
          <span className="text-white">GET IN </span>
          <span className="text-red-600">TOUCH</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Ready to elevate your vehicle's aesthetics and protection? Reach out
          to us today! Our team is eager to assist you with any inquiries or
          booking requests.
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-black/70 border border-red-700 rounded-2xl p-8 text-center backdrop-blur-sm
                       hover:border-red-500 hover:shadow-lg hover:shadow-red-600/30 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-red-600 mb-4 flex justify-center"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
            </motion.div>
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-300 text-base">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
