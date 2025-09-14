import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const services = [
  "Car Wash & Services",
  "Foam Wash",
  "Paint Correction",
  "Interior Detailing",
  "Steam Cleaning",
  "Clay Bar Treatment",
  "Headlight Restoration",
  "Wheel Polishing",
  "Ceramic Coating",
  "PPF Coating",
  "Graphene Coating",
  "Carbon Coating",
  "Polymer Coating",
  "Carnauba Wax",
  "AC Vent & Coil Cleaning",
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-[#111827] text-gray-300 pt-12 pb-6 px-6 md:px-16 border-t-4 border-red-600 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-extrabold text-red-500 mb-4">
            Auto Car Spa
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Premium auto & bike detailing services — ceramic coating, paint
            protection, deep cleaning, and professional care that makes your
            ride look brand new.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-600 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-10 after:bg-red-600 after:rounded-full">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-red-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-red-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services List */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-600 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-10 after:bg-red-600 after:rounded-full">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-red-700">
            {services.map((service, index) => (
              <li key={index} className="hover:text-red-500 transition">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-600 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-10 after:bg-red-600 after:rounded-full">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm mb-5">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-500" />
              <span>+91 98890 49889</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Gorakpur</span>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-red-600 hover:bg-white hover:text-red-600 p-2 rounded-full transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-red-600 hover:bg-white hover:text-red-600 p-2 rounded-full transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-red-600 hover:bg-white hover:text-red-600 p-2 rounded-full transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-red-500 font-semibold">Auto Car Spa</span>. All
        rights reserved.
        <br />
        <span className="text-xs">
          Powered by{" "}
          <a
            href="https://webala.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline"
          >
            Webala
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
