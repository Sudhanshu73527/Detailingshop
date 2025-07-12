import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-14 px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold">
          <span className="text-white">GET IN </span>
          <span className="text-red-600">TOUCH</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-xl md:text-semibold">
          Ready to elevate your vehicle's aesthetics and protection? Reach out
          to us today! Our team is eager to assist you with any inquiries or
          booking requests.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          {
            icon: <FaPhoneAlt size={24} />,
            title: "Call Us",
            content: "+91 7004542630",
          },
          {
            icon: <FaEnvelope size={24} />,
            title: "Email Us",
            content: "thedetailingmafia.danapur@gmail.com",
          },
          {
            icon: <FaMapMarkerAlt size={24} />,
            title: "Visit Us",
            content:
              "patna Market, Usri Khurd, panchmukhi mandir, Khagaul Road, Patna - 88888",
          },
          {
            icon: <FaClock size={24} />,
            title: "Working Hours",
            content: "Mon - Sun: 9 AM - 8 PM",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-black border border-red-800 rounded-lg p-6 text-center hover:shadow-lg hover:shadow-red-600/20 transition duration-300"
          >
            <div className="text-red-600 mb-3 flex justify-center">
              {item.icon}
            </div>
            <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
            <p className="text-gray-300 text-sm">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
