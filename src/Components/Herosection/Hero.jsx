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







import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-green-50 p-6">
      <div className="max-w-6xl w-full bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6 lg:p-12">
        {/* Left: GIF */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
            alt="buy domain GIF"
            className="w-72 h-72 object-cover rounded-xl shadow-lg"
            loading="lazy"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="px-2 md:px-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M12 6v6" />
              </svg>
              Not Live
            </span>
            <span className="text-xs text-slate-500">(Buy a domain to go live)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight mb-4">
            You are not live.
            <br />
            Get your domain & go online today.
          </h1>

          <p className="text-slate-600 mb-6">
            Your site is ready — it just needs a domain. Secure a memorable domain name, connect it, and we’ll make your project visible to the world. Fast setup, SSL included, and full support from our team.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="https://www.godaddy.com/" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-5 py-3 rounded-lg shadow-lg hover:scale-[1.02] transition-transform"
            >
              Buy Domain
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="text-slate-700 bg-slate-100 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-200 transition"
            >
              Need help connecting? Contact us
            </button>
          </div>

          <div className="mt-6 text-sm text-slate-500">
            <strong>Tip:</strong> Choose a short, brandable domain (eg. yourbrand.com) — avoid long hyphenated names for better recall.
          </div>

          <div className="mt-6 text-xs text-slate-400">Team: 6 dedicated members · Fast turnaround · SSL & DNS support</div>
        </motion.div>
      </div>
    </section>
  );
}


