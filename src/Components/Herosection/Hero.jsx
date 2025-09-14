import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg1 from "../../assets/car1.jpg";
import heroImg2 from "../../assets/car2.jpg";
import heroImg3 from "../../assets/car1.jpg";
import heroImg4 from "../../assets/yellow.png";
import {
  FaArrowRight,
  FaTimes,
  FaUser,
  FaPhone,
  FaClipboardList,
} from "react-icons/fa";

const images = [heroImg1, heroImg2, heroImg3, heroImg4];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // clear error on typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, service, message } = formData;

    if (!name || !phone || !service) {
      setError("Please fill out all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    const whatsappMessage = `Hello, I would like to book a service.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Message:* ${message}`;
    const whatsappURL = `https://wa.me/ 9889049889?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
    setShowBookingForm(false);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden text-white font-sans">
      {/* Background Slider */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 1.2 },
            opacity: { duration: 1 },
          }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-5 md:px-10 py-12 flex items-center justify-center h-full md:hidden">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl text-center bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 drop-shadow-md">
            Auto Car Spa Detailing
          </h1>

          <p className="mt-5 text-base sm:text-lg text-white leading-relaxed">
            Bring back the showroom shine! We specialize in car & bike
            detailing, deep cleaning, ceramic coating, and much more — tailored
            to give your ride the care it deserves.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowBookingForm(true)}
            className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg transition duration-300"
          >
            Book Your Appointment <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {showBookingForm && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowBookingForm(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
              >
                <FaTimes size={20} />
              </button>

              <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
                Book Your Service
              </h2>

              {error && (
                <p className="text-red-500 text-sm text-center mb-3">{error}</p>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="relative">
                  <FaUser className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-500"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <FaPhone className="absolute left-3 top-4 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-500"
                  />
                </div>

                {/* Service */}
                <div className="relative">
                  <FaClipboardList className="absolute left-3 top-4 text-gray-400" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800"
                  >
                    <option value="">Select Service</option>
                    <option>Car Wash</option>
                    <option>Detailing</option>
                    <option>Ceramic Coating</option>
                    <option>Paint Protection</option>
                  </select>
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Additional Message (Optional)"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-500"
                ></textarea>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Submit 
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
