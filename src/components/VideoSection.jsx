import React from "react";
import { FaYoutube } from "react-icons/fa";

const VideoSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen bg-black px-4 py-10 sm:py-20 md:py-28">
      <div
        className="relative flex justify-center items-center border shadow-lg rounded-2xl w-full sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[45%]"
        style={{
          height: "auto",
          aspectRatio: "16/9", // Maintains 16:9 aspect ratio
          borderWidth: "2px",
          borderColor: "#FFFFFF0D",
          background: "transparent", // Set background to transparent
        }}
      >
        {/* Embedded YouTube Video */}
        <iframe
          className="absolute rounded-xl w-full h-full"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="YouTube Video"
          allowFullScreen
        ></iframe>

        {/* AdTask.ai Text Overlay */}
        <div
          className="absolute text-center font-bold text-white opacity-10"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "6rem", // Default size for large screens
          }}
        >
          AdTask.ai
        </div>

        {/* YouTube Icon Overlay */}
        <FaYoutube
          className="absolute"
          style={{
            width: "96px",
            height: "67px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#FF0000",
          }}
        />
      </div>
    </div>
  );
};

export default VideoSection;
