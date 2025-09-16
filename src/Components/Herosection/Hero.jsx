// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import heroImg1 from "../../assets/car1.jpg";
// import heroImg2 from "../../assets/car2.jpg";
// import heroImg3 from "../../assets/car1.jpg";
// import heroImg4 from "../../assets/yellow.png";
// import { FaArrowRight } from "react-icons/fa";

// const images = [heroImg1, heroImg2, heroImg3, heroImg4];

// const Hero = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDirection(1);
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0,
//     }),
//     center: { x: 0, opacity: 1 },
//     exit: (direction) => ({
//       x: direction < 0 ? "100%" : "-100%",
//       opacity: 0,
//     }),
//   };

//   return (
//     <section className="relative w-full h-screen overflow-hidden text-white font-sans">
//       {/* Background Slider */}
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.img
//           key={currentImage}
//           src={images[currentImage]}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "tween", duration: 1.2 },
//             opacity: { duration: 1 },
//           }}
//           className="absolute inset-0 w-full h-full object-cover z-0"
//         />
//       </AnimatePresence>

//       {/* Hero Content */}
//       <div className="relative z-10 container mx-auto px-5 md:px-10 py-12 flex items-center justify-center h-full">
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1.2 }}
//           className="max-w-3xl text-center bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl"
//         >
//           <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 drop-shadow-md">
//             Auto Car Spa Detailing
//           </h1>

//           <p className="mt-5 text-base sm:text-lg text-white leading-relaxed">
//             Bring back the showroom shine! We specialize in car & bike
//             detailing, deep cleaning, ceramic coating, and much more — tailored
//             to give your ride the care it deserves.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => navigate("/booking")}
//             className="mt-8 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg transition duration-300"
//           >
//             Book Your Appointment <FaArrowRight />
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;







import React from 'react'

const Hero = () => {
  return (
    <div>
      you are not live 🐱‍🏍🐱‍🏍🐱‍🐉
    </div>
  )
}

export default Hero

