import React from "react";

const CallToAction = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white w-screen">
      <div className="text-center p-10 bg-opacity-10 backdrop-blur-md w-screen h-full">
        {/* Added "adTask.ai" text */}
        {/* <div
          className="absolute"
          style={{
            width: "468px",
            height: "95.96131134033203px",
            top: "5622px",
            left: "487px",
            background:
              "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(180deg, #E2E8F8 0%, #858992 100%)",
            opacity: 0.3,
            zIndex: -1, // Make sure the text stays behind other content
          }}
        >
          <span
            style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "32px",
              lineHeight: "48px",
              letterSpacing: "0%",
              color: "#000000", // Text color
              opacity: 0.3,
            }}
          >
            adTask.ai
          </span>
        </div> */}

        <h1 className="text-[80px] sm:text-[90px] font-bold text-gray-600 opacity-30 mb-32">
          adTask.ai
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold">
          Are you ready to boost
          <br />
          <span className="text-blue-400">your Digital Presence?</span>
        </h2>
        <div className="mt-6 space-y-6 flex flex-col items-center">
          <div
            className="w-40 h-10 rounded-[15px] border border-white/10 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(90deg, rgba(142, 141, 141, 0.15) 0%, rgba(40, 40, 40, 0.15) 100%)",
            }}
          >
            <span
              className="text-white text-xs font-medium"
              style={{ fontFamily: "Poppins", lineHeight: "33.6px" }}
            >
              Start Free Trail
            </span>
          </div>
          <button
            className="w-40 h-10 rounded-[15px] border border-white/10 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(90deg, rgba(173, 216, 230, 0.3) 0%, rgba(135, 206, 250, 0.3) 100%)",
            }}
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
