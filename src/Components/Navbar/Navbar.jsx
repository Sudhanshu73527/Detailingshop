import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/carspa2.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Service", path: "/service" },
  { name: "Gallary", path: "/gallary" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

  // ✅ Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ WhatsApp redirect on submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, service, message } = formData;
    const whatsappMessage = `Hello, I would like to book a service.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Message:* ${message}`;
    const whatsappURL = `https://wa.me/98890 49889?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank"); // Open WhatsApp chat
    setShowBookingForm(false); // Close modal
  };

  return (
    <>
      <motion.nav
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
      ${
        scrolled
          ? "backdrop-blur-lg bg-gradient-to-r from-[#1f1c2cff] via-[#928dabcc] to-[#1f1c2cff] shadow-[0_0_15px_rgba(255,0,0,0.5)] py-3"
          : "backdrop-blur-md bg-gradient-to-r from-[#1f1c2cdd] via-[#928dabcc] to-[#1f1c2cdd] py-4"
      } text-white`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.img
              src={logo}
              alt="Auto Car Spa Logo"
              className="w-12 h-12 rounded-full shadow-lg"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <motion.span
              whileHover={{ scale: 1.08 }}
              className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-50 to-red-600 bg-clip-text text-transparent"
            >
              Auto Car Spa
            </motion.span>
          </Link>

          {/* Center Nav Links */}
          <ul className="hidden md:flex space-x-8 text-md font-medium justify-center mx-auto">
            {navLinks.map((link, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <Link
                  to={link.path}
                  className="hover:text-red-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gradient-to-r from-red-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            ))}
          </ul>

          {/* Right: Book Now + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => setShowBookingForm(true)}
                className="hidden md:inline-block bg-red-600 text-white font-semibold px-4 py-2 rounded-lg hover:shadow-[0_0_15px_rgba(255,0,0,0.8)] hover:bg-red-700 transition-all duration-300"
              >
                Book Now
              </button>
            </motion.div>

            <motion.div
              className="md:hidden text-3xl cursor-pointer text-red-500"
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden w-full bg-[#1f1c2c] overflow-hidden shadow-lg"
            >
              <motion.ul
                className="flex flex-col px-6 py-4 space-y-4"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      to={link.path}
                      className="block text-lg font-medium hover:text-yellow-400 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <button
                    onClick={() => {
                      setShowBookingForm(true);
                      setMenuOpen(false);
                    }}
                    className="block w-full text-center bg-red-500 text-white font-semibold py-2 rounded hover:bg-yellow-600 transition"
                  >
                    Book Now
                  </button>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

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

              <h2 className="text-2xl font-bold text-center text-red-600 mb-4">
                Book Your Service
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Service</option>
                  <option>Car Wash</option>
                  <option>Detailing</option>
                  <option>Ceramic Coating</option>
                  <option>Paint Protection</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Additional Message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
                >
                  Submit 
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
