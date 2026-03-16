"use client";
import { useState } from "react";
import Image from "next/image";
import { FaBell, FaMoon, FaTachometerAlt, FaShoppingCart, FaVideo } from "react-icons/fa";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };
  return (
    <header className='bg-white w-full'>
      <div className="top_header p-4 flex justify-between items-center w-full md:w-full">
        <div className="relative md:w-72 w-10">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input type="text" placeholder="Search..." className="hidden md:block w-full pl-10 pr-4 py-2 text-sm bg-gray-100 border border-transparent rounded focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 outline-none" />
          <input type="text" placeholder="Search..." className="hidden absolute top-5 w-100 pl-10 pr-4 py-2 text-sm bg-gray-100 border border-transparent rounded focus:bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 outline-none" />
        </div>
        <div className="icons flex items-center gap-x-2 md:gap-x-5 gap-y-3 relative">

          {/* Language Dropdown */}
          <div className="relative cursor-pointer">
            <button className="flex" onClick={() => toggleDropdown("language")}>
              <Image
                src="/images/us.svg"
                alt="US Flag"
                width={26}
                height={20}
                className="rounded cursor-pointer md:w-6 md:h-6 w-5 h-5"
              />
            </button>

            {openDropdown === "language" && (
              <div className="absolute right-0 left-0 mx-auto mt-2 w-40 bg-white shadow-lg rounded-md p-2 z-50">
                <p className="cursor-pointer hover:bg-gray-100 p-2 rounded">English</p>
                <p className="cursor-pointer hover:bg-gray-100 p-2 rounded">Spanish</p>
                <p className="cursor-pointer hover:bg-gray-100 p-2 rounded">French</p>
              </div>
            )}
          </div>

          {/* Orders Dropdown */}
          <div className="relative cursor-pointer">
            <button
              onClick={() => toggleDropdown("orders")}
              className="p-2 rounded hover:bg-gray-200 cursor-pointer"
            >
              <FaShoppingCart className="md:w-6 w-5 md:h-6 h-5 text-gray-600" />
            </button>

            {openDropdown === "orders" && (
              <div className="absolute right-0 left-0 mx-auto mt-2 w-48 bg-white shadow-lg rounded-md p-2 z-50">
                <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">My Orders</p>
                <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Cart</p>
                <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Wishlist</p>
              </div>
            )}
          </div>

          {/* Video Dropdown */}
          <div className="relative cursor-pointer hidden md:block">
            <button
              onClick={() => toggleDropdown("video")}
              className="p-2 rounded hover:bg-gray-200 cursor-pointer"
            >
              <FaVideo className="md:w-6 w-5 md:h-6 h-5 text-gray-600" />
            </button>

            {openDropdown === "video" && (
              <div className="absolute right-0 left-0 mx-auto mt-2 w-48 bg-white shadow-lg rounded-md p-2 z-50">
                <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Start Meeting</p>
                <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Join Meeting</p>
                <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Recordings</p>
              </div>
            )}
          </div>

          {/* Dark Mode Dropdown */}
          <div className="relative cursor-pointer">
            <button
              onClick={() => toggleDropdown("theme")}
              className="p-2 rounded hover:bg-gray-200 cursor-pointer"
            >
              <FaMoon className="md:w-6 w-5 md:h-6 h-5 text-gray-600" />
            </button>

            {openDropdown === "theme" && (
              <div className="absolute right-0 left-0 mx-auto mt-2 w-40 bg-white shadow-lg rounded-md p-2 z-50">
                <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Light</p>
                <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Dark</p>
                <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">System</p>
              </div>
            )}
          </div>

          {/* Notifications Dropdown */}
          <div className="relative cursor-pointer hidden md:block">
            <button
              onClick={() => toggleDropdown("notifications")}
              className="p-2 rounded hover:bg-gray-200 relative"
            >
              <FaBell className="md:w-6 w-5 md:h-6 h-5 text-gray-600" />
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {openDropdown === "notifications" && (
              <div className="absolute right-0 left-0 mx-auto mt-2 w-45 bg-white shadow-lg rounded-md p-3 z-50">
                <p className="text-sm text-gray-500">No new notifications</p>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative cursor-pointer">
            <button
              onClick={() => toggleDropdown("profile")}
              className="md:bg-gray-100 md:py-2 md:px-4 flex items-center gap-x-2 rounded cursor-pointer"
            >
              <Image
                width={40}
                height={40}
                className="rounded-full object-cover md:w-10 md:h-10 w-8 h-8"
                src="/images/admin.jpg"
                alt="Admin"
              />
              <div className="hidden md:block text-sm text-gray-500 text-left">
                <p className="font-medium">Admin</p>
                <p className="text-xs">Founder</p>
              </div>
            </button>

            {openDropdown === "profile" && (
              <div className="absolute right-0 mx-auto mt-2 w-48 bg-white shadow-lg rounded-md p-2 z-50">
                <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">My Profile</p>
                <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Settings</p>
                <p className="hover:bg-gray-100 p-2 rounded cursor-pointer text-red-500">
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;