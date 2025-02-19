import React from "react";

const ContactForm = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-black px-6 pt-20 text-white">
      {/* Top Centered Contact Us Button */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
        <div
          className="w-34 h-8 rounded-[15px] border border-white/10 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(90deg, rgba(142, 141, 141, 0.15) 0%, rgba(40, 40, 40, 0.15) 100%)",
          }}
        >
          <span className="text-white text-xs font-medium">Contact Us</span>
        </div>
      </div>

      {/* Left Side - Text Content */}
      <div className="md:w-1/2 w-full px-6 text-left flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Ask whatever you have <br />
          <span className="text-blue-400">in your mind now</span>
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          Whether you have questions or are ready to discuss your business,
          we’re here to help. Reach out today.
        </p>
        <div className="mt-6 space-y-4">
          <p className="flex items-center space-x-3">
            <span className="text-blue-400 text-xl">✉</span>
            <a
              href="mailto:contact@adtask.ai"
              className="text-blue-300 hover:underline text-lg"
            >
              contact@adtask.ai
            </a>
          </p>
          <p className="flex items-center space-x-3 text-lg">
            <span className="text-blue-400 text-xl">📞</span>
            <span>(969) 819-8061</span>
          </p>
          <p className="flex items-center space-x-3 text-lg">
            <span className="text-blue-400 text-xl">📍</span>
            <span>San Francisco Bay Area</span>
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 w-full px-6 flex flex-col justify-center">
        <form className="bg-black p-8 rounded-lg shadow-lg w-full max-w-lg">
          <label htmlFor="name" className="block text-gray-300 text-lg">
            Name
          </label>
          <input
            id="name"
            type="text"
            aria-label="Name"
            className="w-full p-3 mt-2 bg-black rounded-lg outline-none border border-gray-700 focus:border-blue-400"
            required
          />

          <label htmlFor="email" className="block text-gray-300 text-lg mt-4">
            Email
          </label>
          <input
            id="email"
            type="email"
            aria-label="Email"
            className="w-full p-3 mt-2 bg-black rounded-lg outline-none border border-gray-700 focus:border-blue-400"
            required
          />

          <label htmlFor="message" className="block text-gray-300 text-lg mt-4">
            Message
          </label>
          <textarea
            id="message"
            aria-label="Message"
            className="w-full p-3 mt-2 bg-black rounded-lg outline-none border border-gray-700 focus:border-blue-400"
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full mt-6 bg-black hover:bg-[#333] text-white p-3 rounded-lg border border-gray-600 text-lg cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
