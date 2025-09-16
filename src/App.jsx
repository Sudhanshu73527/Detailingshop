import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Herosection/Hero";
// import Footer from "./Components/Footer/Footer";
// import ServiceIcons from "./Components/ServiceIcons/ServiceIcons";
// import WhatWeStrive from "./Components/WhatWeStrive/WhatWeStrive";
// import HeroQuote from "./Components/HeroQuote/HeroQuote";
// import OtherServices from "./Components/OtherServices/OtherServices";
// import DetailingStreetBanner from "./Components/DetailingStreetBanner/DetailingStreetBanner";
// import FaqSection from "./Components/FaqSection/FaqSection";
// import OurPartners from "./Components/OurPartners/OurPartners";
// import Services from "./Components/Services/Services";
// import ContactSection from "./Components/contactsection/ContactSection";
// import StatsSection from "./Components/StatsSection/StatsSection";

const Page = ({ name }) => (
  <div className="mt-24 p-6 text-center text-2xl">{name} Page</div>
);

function App() {
  return (
    <>
      {/* <Navbar />  */}
      {/* <Routes>
        <Route path="/" element={<Page name="Home" />} />
        <Route path="/about" element={<Page name="About" />} />
        <Route path="/courses" element={<Page name="Courses" />} />
        <Route path="/blog" element={<Page name="Blog" />} />
        <Route path="/contact" element={<Page name="Contact" />} />
      </Routes> */}
      <Hero/>
      {/* <HeroQuote/> */}
      {/* <WhatWeStrive/> */}
      {/* <ServiceIcons/> */}
      {/* <OtherServices/> */}
      {/* <DetailingStreetBanner/> */}
      {/* <OurPartners/> */}
      {/* <Services/> */}
      {/* <StatsSection/> */}
      {/* <ContactSection/> */}
      {/* <FaqSection/> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
