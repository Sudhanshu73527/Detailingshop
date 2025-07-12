import React from "react";
import ProShield from "../../assets/part1.png";
import Llumar from "../../assets/lumar.png";
import Garware from "../../assets/gar.png";
import Motofence from "../../assets/moto.png";
import Menzerna from "../../assets/menz.png";
import Mafra from "../../assets/mafra.png";
import Xpel from "../../assets/xpel.png";
import ThreeM from "../../assets/three.png";

const partners = [
  { name: "Pro Shield", image: ProShield },
  { name: "LLumar", image: Llumar },
  { name: "Garware", image: Garware },
  { name: "Motofence", image: Motofence },
  { name: "Menzerna", image: Menzerna },
  { name: "Mafra", image: Mafra },
  { name: "Xpel", image: Xpel },
  { name: "3M", image: ThreeM },
];

const OurPartners = () => {
  return (
    <section className="bg-white text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 tracking-widest mb-12">
          OUR PARTNERS
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-[#121e26] hover:bg-red-600 p-4 rounded-xl shadow-xl w-full max-w-[160px] h-[160px] flex items-center justify-center transition-all duration-300 group"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="object-contain w-full h-full grayscale group-hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
