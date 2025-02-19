import React from "react";

const testimonials = [
  {
    quote:
      "We used to struggle with consistent branding across platforms. adTasks unified dashboard ensures our message stays on point every single time.",
    author: "Brand Director at a Tech Startup",
  },
  {
    quote:
      "adTask turned our complicated campaigns into a breeze. The built-in AI agents helped us reach exactly the customers we wanted—without guesswork!",
    author: "Head of Growth at Tech Startup",
  },
  {
    quote:
      "We've tried other platforms before, but none delivered the depth of insights adTask offers. Our conversion rates are up by 35% since we signed on!",
    author: "Ecommerce Manager at Home Décor Brand",
  },
  {
    quote:
      "What impressed me most was the real-time optimization. adTask’s intelligent agents just keep refining our campaigns—our ad spend has never worked harder!",
    author: "Digital Strategist at SaaS Company",
  },
  {
    quote:
      "adTask made everything from campaign setup to performance tracking simple. Our team can now focus on creating great content rather than crunching numbers.",
    author: "Social Media Lead at Non-Profit Organization",
  },
  {
    quote:
      "We've seen a 50% boost in engagement across our social channels since switching to adTask. Its AI-driven insights are game-changing!",
    author: "Social Media Manager at a Fitness Brand",
  },
];

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="bg-gradient-to-r from-[#0B0B0B] to-[#131313] p-6 rounded-lg shadow-lg border border-[#7687B5] border-t-0 border-b-0 w-[352px] h-[196px]">
      <p className="text-gray-200 italic font-poppins font-normal text-sm leading-5">
        “{quote}”
      </p>
      <p className="text-white font-semibold mt-10 font-poppins text-sm leading-5">
        — {author}
      </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen bg-black px-4 pb-32">
      <div className="w-34 h-8 rounded-[15px] border border-white/10 flex items-center justify-center mt-32 mb-5 bg-gradient-to-r from-gray-600/15 to-gray-800/15">
        <span className="text-white text-xs font-medium font-poppins leading-8">
          TESTIMONIALS
        </span>
      </div>
      <h2 className="text-4xl font-bold text-white mt-2">
        Trusted by <br />
        <span className="text-blue-400">satisfied clients</span>
      </h2>
      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Discover how we’ve driven growth and innovation.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
