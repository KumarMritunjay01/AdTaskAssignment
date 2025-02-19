import React from "react";

const ServicesSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen bg-black px-6 py-12">
      {/* Service Button */}
      <div className="w-28 h-8 rounded-[15px] flex items-center justify-center mb-6 bg-gradient-to-r from-gray-700/15 to-gray-900/15">
        <span className="text-white text-xs font-medium font-poppins">
          SERVICES
        </span>
      </div>

      {/* Header */}
      <div className="w-full max-w-3xl text-center mb-6 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          Innovative Services <br />
          <span className="text-blue-400">for Growth.</span>
        </h2>
      </div>

      {/* Service Boxes */}
      <div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-xl text-center shadow-lg border transition-transform duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(158.19deg, #0B0B0B 5.17%, #1D2333 98.61%)",
              borderImage:
                "linear-gradient(270deg, #7687B5 0%, #333B4F 100%) 1",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          >
            {/* Image instead of icon */}
            <div className="mb-4 flex justify-center">
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-lg md:text-xl font-medium mb-2 text-white">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Contact Button */}
      <div className="w-36 h-10 rounded-[15px] border border-white/10 flex items-center justify-center mt-8 bg-gradient-to-r from-gray-700/15 to-gray-900/15">
        <span className="text-white text-xs font-medium font-poppins">
          Contact Us
        </span>
      </div>
    </div>
  );
};

// Service Data with Images
const servicesData = [
  {
    icon: "/logo2/logo6.png", // Ensure this file is inside public/logo2/
    title: "Smart Ad Targeting",
    description:
      "AI-powered audience segmentation ensures your ads reach the right people, delivering higher ROI and maximum conversion rates.",
  },
  {
    icon: "/logo2/logo7.png",
    title: "Performance Analytics",
    description:
      "Access real-time insights and track key metrics across all campaigns in one unified dashboard to quickly refine your strategies.",
  },
  {
    icon: "/logo2/logo08.png",
    title: "SEO Automation",
    description:
      "Automate keyword research and content optimization suggestions to improve your search engine rankings with less effort.",
  },
  {
    icon: "/logo2/logo8.png",
    title: "Social Media Marketing",
    description:
      "AI agents craft personalized content, schedule posts, monitor engagement, and refine strategies in real-time.",
  },
  {
    icon: "/logo2/logo10.png",
    title: "Automated Email Campaigns",
    description:
      "Design, personalize, and automate email sequences that boost customer engagement and conversions effortlessly.",
  },
  {
    icon: "/logo2/logo11.png",
    title: "AI Chatbots",
    description:
      "Engage with customers 24/7 using intelligent chatbots that provide instant responses and improve user experience.",
  },
];

export default ServicesSection;
