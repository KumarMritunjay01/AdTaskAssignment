import React from "react";

const brands = [
  { name: "Workday", img: "/logos/Workday.png" },
  { name: "Google", img: "/logos/Google.png" },
  { name: "Salesforce", img: "/logos/Salesforce.png" },
  { name: "Amazon", img: "/logos/Amazon.png" },
  { name: "Sony", img: "/logos/Sony.png" },
  { name: "CocaCola", img: "/logos/Cocacola.png" },
  { name: "Intel", img: "/logos/intel.png" },
  { name: "Workday", img: "/logos/Workday.png" },
];

const platforms = [
  { name: "Google Ads", img: "/logos/Goalkit.png" },
  { name: "TikTok", img: "/logos/Tiktok.png" },
  { name: "Meta", img: "/logos/Meta.png" },
  { name: "LinkedIn", img: "/logos/LinkedIn.png" },
  { name: "Amazon", img: "/logos/AmazonLogo.png" },
  { name: "Twitter", img: "/logos/Twitter.png" },
];

const BrandsSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen bg-black px-4">
      {/* Upper Icon Container (responsive) */}
      <div className="flex flex-wrap justify-center gap-10 w-full overflow-x-auto py-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[80px] h-[80px] opacity-100 hover:scale-105 transition-all duration-300"
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Text Label */}
      <h3 className="text-center text-[#E2E8F8] text-[16px] leading-[22.4px] font-[400] w-[170px] h-[23px] mt-6">
        Adtask AI works with:
      </h3>

      {/* Lower Icon Container (responsive) */}
      <div className="flex flex-wrap justify-center gap-8 w-full py-6 mt-6">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[130px] h-[130px] rounded-xl bg-[#131519] hover:scale-105 transition-all duration-300"
          >
            <img
              src={platform.img}
              alt={platform.name}
              className="h-[90px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
