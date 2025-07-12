import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is the difference between Ceramic Coating and Paint Protection Film (PPF)?",
    answer:
      "Ceramic coating is a liquid polymer that chemically bonds to the factory paint. PPF is a thicker, physical film that protects from chips and scratches.",
  },
  {
    question: "How long does Ceramic Coating last?",
    answer:
      "Typically, ceramic coating can last between 2 to 5 years depending on the product quality and maintenance.",
  },
  {
    question: "Can Ceramic Coating be applied to all surfaces of the vehicle?",
    answer:
      "Yes, it can be applied to paint, glass, wheels, and plastic trims depending on the type of coating used.",
  },
  {
    question: "Is PPF suitable for all vehicles?",
    answer:
      "Yes, PPF can be applied to any car surface for protection, especially in high-impact areas like bumpers, hoods, and mirrors.",
  },
  {
    question: "What restoration services do you offer?",
    answer:
      "We offer paint correction, oxidation removal, interior restoration, and engine bay detailing.",
  },
  {
    question: "How often should I detail my vehicle?",
    answer:
      "We recommend detailing every 3-6 months for best results and to maintain your vehicle’s appearance.",
  },
];

const FaqSectionDark = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-16 px-4 bg-[#111827] text-white">
      <div className="max-w-4xl mx-auto bg-[#1F2937] rounded-xl shadow-2xl p-6 md:p-10">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-red-500 to-gray-400 text-transparent bg-clip-text mb-10 tracking-wide">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-gray-700">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="py-4 px-2 transition duration-200 hover:bg-[#2D3748] rounded-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left group"
              >
                <span className="text-base md:text-lg font-semibold text-gray-100 group-hover:text-red-500 transition-colors duration-200">
                  {faq.question}
                </span>
                <span className="text-red-400 group-hover:text-red-500 transition-transform">
                  {openIndices.includes(index) ? (
                    <FaChevronUp className="w-4 h-4" />
                  ) : (
                    <FaChevronDown className="w-4 h-4" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndices.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden mt-3 text-gray-300 text-sm leading-relaxed"
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="px-1"
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSectionDark;
