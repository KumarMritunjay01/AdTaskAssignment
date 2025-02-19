import React from "react";

const FeatureSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen bg-black px-4 py-12">
      {/* Feature Button */}
      <div
        className="w-24 h-8 rounded-[15px] border border-white/10 flex items-center justify-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(142, 141, 141, 0.15) 0%, rgba(40, 40, 40, 0.15) 100%)",
        }}
      >
        <span className="text-white text-xs font-medium">FEATURES</span>
      </div>

      {/* Header */}
      <div className="text-center mt-6 max-w-2xl">
        <h2 className="text-3xl md:text-4xl text-white font-medium leading-tight">
          Feature packed to make <br />
          <span className="text-blue-400">
            Digital marketing easier and affordable.
          </span>
        </h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base max-w-md mx-auto">
          Experience Intelligent Features to optimize your marketing efforts.
        </p>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
        {/* Left Large Box */}
        <div className="rounded-xl p-6 border shadow-xl flex flex-col items-center justify-center w-full min-h-[320px] bg-gradient-to-b from-[#0B0B0B] to-[#1D2333] border-gray-700">
          <img
            src="/public/logo2/logo1.png"
            alt="Feature 1"
            className="w-full h-70 mb-4 bg-transparent"
          />
          <h4 className="text-white text-lg font-semibold mt-4">
            Reach Target Audience
          </h4>
          <p className="text-gray-400 mt-2 text-center max-w-sm text-sm">
            Pinpoint the perfect audience with precision. Our AI-driven
            targeting ensures every message resonates where it matters most.
          </p>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-6">
          {/* Upper Box */}
          <div className="rounded-xl p-6 border shadow-lg flex flex-col items-center justify-center w-full min-h-[200px] bg-gradient-to-b from-[#0B0B0B] to-[#1D2333] border-gray-700">
            <img
              src="/public/logo2/logo3.png"
              alt="Feature 2"
              className="w-40 h-30 "
            />
            <h4 className="text-white text-lg font-semibold mt-2">
              Marketing Made Easier
            </h4>
            <p className="text-gray-400 text-sm text-center max-w-xs">
              Save time and simplify campaign management with automated
              workflows.
            </p>
          </div>

          {/* Lower Box */}
          <div className="rounded-xl p-6 border shadow-lg flex flex-col items-center justify-center w-full min-h-[200px] bg-gradient-to-b from-[#0B0B0B] to-[#1D2333] border-gray-700">
            <div className="flex gap-2">
              <img
                src="/public/logo2/logo4.png"
                alt="Feature 3"
                className="w-30 h-30  bg-transparent"
              />
              <img
                src="/public/logo2/logo5.png"
                alt="Feature 3"
                className="w-30 h-30  bg-transparent"
              />
            </div>
            <h4 className="text-white text-lg font-semibold mt-2">
              Smart Marketing Insights
            </h4>
            <p className="text-gray-400 text-sm text-center max-w-xs">
              Unlock actionable data to guide every decision with powerful
              analytics.
            </p>
          </div>
        </div>

        {/* Right Large Box */}
        <div className="rounded-xl p-6 border shadow-xl flex flex-col items-center justify-center w-full min-h-[320px] bg-gradient-to-b from-[#0B0B0B] to-[#1D2333] border-gray-700">
          <img
            src="/public/logo2/logo2.png"
            alt="Feature 4"
            className="w-40 h-60 mb-4"
          />
          <h4 className="text-white text-lg font-semibold mt-4">
            Intelligent Agents to Optimize Your Reach
          </h4>
          <p className="text-gray-400 mt-2 text-center max-w-sm text-sm">
            AI-powered agents track performance in real-time to help you reach
            more customers efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
