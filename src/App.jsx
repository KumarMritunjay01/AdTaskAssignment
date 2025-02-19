import React from "react";
import Navbar from "./components/Navbar";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import BrandsSection from "./components/BrandsSection";
import ServicesSection from "./components/SevicesSection";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <VideoSection />
      <BrandsSection />
      <FeatureSection />
      <ServicesSection />
      <Testimonials />
      <ContactForm />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
