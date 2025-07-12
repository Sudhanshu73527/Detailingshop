import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import carImage from "../../assets/car5.webp";
import badgeIcon from "../../assets/car2.jpg";

const HeroQuote = () => {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 300], [0, 50]);

  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background & Blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-100 via-white to-white opacity-60 z-0" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-red-200 rounded-full opacity-30 filter blur-3xl z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row w-full min-h-[600px]">
        {/* Car Image & Tooltips */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center relative px-4 py-12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div style={{ y: yOffset }} className="relative">
            <motion.img
              src={carImage}
              alt="Luxury Car"
              className="max-w-[100%] md:max-w-[600px] drop-shadow-2xl rounded-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Floating Badge */}
            <div className="absolute top-4 right-4 bg-white/70 px-3 py-1 rounded-full shadow-md flex items-center gap-2 text-sm font-semibold backdrop-blur">
              <img
                src={badgeIcon}
                alt="Badge"
                className="w-6 h-6 rounded-full"
              />
              Certified
            </div>

            {/* Tooltip 1 */}
            <div className="absolute top-2/3 left-[15%]">
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openModal(
                    "Our alloy wheels coating gives a protective, shiny finish to prevent oxidation and brake dust build-up."
                  )
                }
              >
                <div className="w-4 h-4 bg-red-500 rounded-full animate-ping absolute top-0 left-0" />
                <div className="w-4 h-4 bg-red-500 rounded-full z-10" />
                <div className="absolute top-[-30px] left-[20px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  Alloy Wheel Coated
                </div>
              </div>
            </div>

            {/* Tooltip 2 */}
            <div className="absolute top-[35%] left-[75%]">
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openModal(
                    "Nano glass treatment enhances visibility and protects against UV, watermarks, and contaminants."
                  )
                }
              >
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute top-0 left-0" />
                <div className="w-4 h-4 bg-blue-500 rounded-full z-10" />
                <div className="absolute top-[-30px] right-[20px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  Nano Glass Treatment
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center p-8 md:px-12 text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-extrabold italic text-black mb-6">
            “<span className="text-red-600">God Detailing</span> is not a skill,
            <br className="hidden md:block" />
            It's an Attitude!”
          </h2>

          {[
            "Welcome to The God Detailing  – your one-stop destination for elite car care services. We believe “Perfection is in the Detail”, and that is the philosophy that drives our team. Our passionate professionals transform even the most tired vehicles into road-ready masterpieces.",
            "From Ceramic Coatings to Paint Protection Films, from Clarity Coat to premium car wash treatments – every product and process is handpicked and customized to meet your car’s unique needs. Experience the finesse and finish only true detailing experts can provide.",
          ].map((para, idx) => (
            <motion.p
              key={idx}
              className="text-gray-600 text-lg md:text-base leading-relaxed mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {para}
            </motion.p>
          ))}

          <motion.div
            className="mt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition duration-300">
              Know More
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      {modalContent && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg max-w-md text-center relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-black font-bold text-lg"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-4">Detail Info</h3>
            <p className="text-gray-700">{modalContent}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroQuote;
