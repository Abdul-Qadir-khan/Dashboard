"use client";

import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function SimpleFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        
        {/* Left Section */}
        <p className="mb-3 md:mb-0">
          © {new Date().getFullYear()} 
          <span className="font-semibold text-gray-700 ml-1">Yumzy</span>. 
          All rights reserved.
        </p>

        {/* Center Links */}
        <div className="flex items-center gap-6">
          <a 
            href="#" 
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Terms
          </a>
          <a 
            href="#" 
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-blue-500 transition-transform hover:scale-110 duration-200">
            <FaTwitter size={14} />
          </a>
          <a href="#" className="hover:text-pink-500 transition-transform hover:scale-110 duration-200">
            <FaInstagram size={14} />
          </a>
          <a href="#" className="hover:text-gray-800 transition-transform hover:scale-110 duration-200">
            <FaGithub size={14} />
          </a>
        </div>

      </div>
    </footer>
  );
}