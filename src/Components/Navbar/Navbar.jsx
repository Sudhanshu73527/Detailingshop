import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#1f1c2cdd] via-[#928dabcc] to-[#1f1c2cdd] shadow-xl text-white"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-wide">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-yellow-50 to-red-600 bg-clip-text text-transparent"
          >
            God Detailing
          </motion.span>
        </Link>

        {/* Center: Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-md font-medium justify-center mx-auto">
          {navLinks.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <Link
                to={link.path}
                className="hover:text-red-600 transition-colors duration-300"
              >
                {link.name}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 group-hover:w-full transition-all duration-300"></span>
            </motion.li>
          ))}
        </ul>

        {/* Right: Book Now Button & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link
            to="/book"
            className="hidden md:inline-block bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-red-800 transition"
          >
            Book Now
          </Link>
          <div
            className="md:hidden text-2xl cursor-pointer text-red-600"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
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
            className="md:hidden w-full bg-[#1f1c2c] overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="block text-lg font-medium hover:text-yellow-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/book"
                  className="block w-full text-center bg-red-500 text-white font-semibold py-2 rounded hover:bg-yellow-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
