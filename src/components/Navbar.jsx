import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [toolsDropdown, setToolsDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-[#5C60691A] border border-white/10 backdrop-blur-md shadow-md z-50">
      <div className="w-[95%] max-w-[1176px] mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold text-white">adTask.ai</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white">
          <div
            className="relative group"
            onMouseEnter={() => setProductsDropdown(true)}
            onMouseLeave={() => setProductsDropdown(false)}
          >
            <button className="flex items-center">
              Products <span className="ml-1">▼</span>
            </button>
            {productsDropdown && (
              <div className="absolute top-8 left-0 bg-gray-800 text-white p-2 rounded shadow-md">
                <p className="py-1">Product 1</p>
                <p className="py-1">Product 2</p>
                <p className="py-1">Product 3</p>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setToolsDropdown(true)}
            onMouseLeave={() => setToolsDropdown(false)}
          >
            <button className="flex items-center">
              Tools <span className="ml-1">▼</span>
            </button>
            {toolsDropdown && (
              <div className="absolute top-8 left-0 bg-gray-800 text-white p-2 rounded shadow-md">
                <p className="py-1">Tool 1</p>
                <p className="py-1">Tool 2</p>
                <p className="py-1">Tool 3</p>
              </div>
            )}
          </div>

          <button className="text-white">Contact Us</button>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-[#7687B5] rounded-full text-white">
            Log in
          </button>
          <button className="px-6 py-2 border border-[#7687B5] bg-[#7687B54A] rounded-full text-white">
            Schedule a Call
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <FaTimes className="text-white text-xl" />
            ) : (
              <FaBars className="text-white text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col items-center py-4 space-y-4 md:hidden">
          <button>Products</button>
          <button>Tools</button>
          <button>Contact Us</button>
          <button className="px-4 py-2 border border-[#7687B5] rounded-full">
            Log in
          </button>
          <button className="px-6 py-2 border border-[#7687B5] bg-[#7687B54A] rounded-full">
            Schedule a Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
