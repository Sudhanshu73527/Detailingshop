import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaPhone, FaClipboardList } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, service, message } = formData;
    if (!name || !phone || !service) {
      setError("🚨 Oops! All fields are required (except the message).");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("📞 Please enter a valid 10-digit phone number.");
      return;
    }

    const whatsappMessage = `Hello, I would like to book a service.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Message:* ${message}`;
    const whatsappURL = `https://wa.me/9889049889?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50/40 to-gray-100 flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Floating Car Icon */}
      <motion.div
        className="absolute top-10 left-10 text-red-500 text-6xl opacity-30"
        animate={{ x: [0, 20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaCarSide />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="backdrop-blur-lg bg-white/70 shadow-2xl rounded-3xl max-w-xl w-full p-8 md:p-10 border border-white/40 relative"
      >
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 drop-shadow-md mb-3"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Book Your <span className="italic">Car Spa</span> 🚗✨
        </motion.h1>

        {/* Fun + Attractive Paragraph */}
        <p className="text-center text-gray-700 mb-8 text-lg leading-relaxed">
          Give your car the spa day it secretly dreams about 😍.  
          We’ll wash, polish, and pamper it — so it rolls out looking  
          like it just signed a Bollywood contract. 🎬✨
        </p>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm text-center mb-3"
          >
            {error}
          </motion.p>
        )}

        {/* Form */}
        <motion.form
          className="space-y-4"
          onSubmit={handleSubmit}
          variants={containerVariants}
        >
          {/* Name */}
          <motion.div className="relative" variants={fieldVariants}>
            <FaUser className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-500"
            />
          </motion.div>

          {/* Phone */}
          <motion.div className="relative" variants={fieldVariants}>
            <FaPhone className="absolute left-3 top-4 text-gray-400" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-500"
            />
          </motion.div>

          {/* Service */}
          <motion.div className="relative" variants={fieldVariants}>
            <FaClipboardList className="absolute left-3 top-4 text-gray-400" />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
            >
              <option value="">Select Service</option>
              <option>Car Wash</option>
              <option>Detailing</option>
              <option>Ceramic Coating</option>
              <option>Paint Protection</option>
            </select>
          </motion.div>

          {/* Message */}
          <motion.textarea
            name="message"
            placeholder="Any special requests? (e.g., 'Treat my car like a celebrity ✨')"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-500"
            variants={fieldVariants}
          ></motion.textarea>

          {/* Submit */}
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-red-500/50 hover:scale-[1.03] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Book Now & Make It Shine!
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default BookingPage;
