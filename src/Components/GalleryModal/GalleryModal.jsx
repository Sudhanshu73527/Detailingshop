import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import g1 from "../../assets/autocar1.webp";
import g2 from "../../assets/autocar2.webp";
import g3 from "../../assets/autocar3.webp";
import g4 from "../../assets/autocar4.webp"
import g5 from "../../assets/autocar5.webp"
const images = [g1, g2, g3, g4,g5];

const GalleryModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-4xl px-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl z-50"
        >
          ✕
        </button>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="rounded-xl overflow-hidden"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-[500px] object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryModal;
