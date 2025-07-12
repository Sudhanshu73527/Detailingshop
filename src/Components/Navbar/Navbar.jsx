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
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#1f1c2cdd] via-[#928dabcc] to-[#1f1c2cdd] shadow-xl text-white"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold tracking-wide">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
          >
            God Detailing
          </motion.span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-md font-medium">
          {navLinks.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <Link
                to={link.path}
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                {link.name}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div
          className="md:hidden text-2xl cursor-pointer text-yellow-300"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1f1c2c] text-white px-6 py-6 space-y-6"
          >
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
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
