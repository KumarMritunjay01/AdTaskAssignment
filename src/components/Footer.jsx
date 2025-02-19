import React from "react";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center w-full bg-black text-white py-10 px-6 sm:px-10 md:px-20 lg:px-40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
        {/* Brand Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-bold text-gray-300">
            ad<span className="text-gray-400">Task.ai</span>
          </h2>
          <div className="mt-4 flex flex-col space-y-2 text-gray-400">
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <a href="mailto:contact@adtask.ai" className="hover:underline">
                contact@adtask.ai
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span>San Francisco Bay Area</span>
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-8 md:space-y-0">
          {/* Utilities Section */}
          <div>
            <h3 className="text-lg font-semibold text-white">Utilities</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h3 className="text-lg font-semibold text-white">Socials</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  X
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        All rights reserved © 2025 adTask
      </div>
    </footer>
  );
};

export default Footer;
