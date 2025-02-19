import React from "react";
import { FaStar } from "react-icons/fa"; // Importing a star icon for the heading

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen bg-black px-4 py-10 sm:py-20 md:py-28 lg:py-32">
      {/* Background Watermark Text */}
      {/* <div className="absolute text-[120px] font-bold text-gray-600 opacity-10">
        AdTask.ai
      </div> */}

      {/* Highlighted Message Button */}
      <button
        className="w-full max-w-[371px] h-[44px] rounded-[15px] border border-[#FFFFFF0D] 
        bg-gradient-to-r from-[rgba(142,141,141,0.15)] to-[rgba(40,40,40,0.15)] 
        flex items-center justify-center gap-2 px-4 mb-6 sm:max-w-[500px]"
      >
        <FaStar className="text-white" />
        <span
          className="w-full text-center 
        font-[Poppins] font-medium text-[12px] sm:text-[16px] md:text-[18px] leading-[33.6px] tracking-[0%] text-white"
        >
          Transform Your Digital Presence with AI Agents
        </span>
      </button>

      {/* Teaser Text */}
      <h1 className="text-[60px] sm:text-[100px] md:text-[120px] font-bold text-gray-600 opacity-10 leading-[1.2]">
        adTask.ai
      </h1>

      {/* Description Text */}
      <p className="mt-2 max-w-2xl text-gray-300 text-sm sm:text-base md:text-lg text-center mx-4 sm:mx-8">
        Stop struggling with marketing decisions. Our AI assistant analyzes your
        business, creates personalized strategies, and helps you execute them –
        all in real-time.
      </p>

      {/* CTA Button */}
      <button className="mt-6 px-6 py-3 text-white bg-gradient-to-r from-gray-400 to-gray-600 rounded-full shadow-lg hover:opacity-80 transition">
        Start Free Trial
      </button>
    </div>
  );
};

export default HeroSection;
