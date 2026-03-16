"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { FaTachometerAlt, FaCog, FaDollarSign, FaChartPie, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Close dropdowns when sidebar collapses
  useEffect(() => {
    if (!isOpen) {
      setActiveDropdown(null);
    }
  }, [isOpen]);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
   <aside
  className={`sticky top-0 bg-white border-r border-gray-200 h-screen 
  transition-all duration-300 flex flex-col shadow-sm
  ${isOpen ? "w-64" : "w-16 md:w-20"}
`}
>
      {/* Header */}
      <div className="flex items-center justify-between p-2 md:p-4 mx-auto w-full">
        {isOpen && (
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={90}
            height={30}
            className="object-contain transition-all duration-300 md:max-w-20 max-w-15"
          />
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
        p-1 md:p-2 rounded-full 
        transition-all duration-300 
        ${isOpen ? "bg-red-100 hover:bg-red-200 mx-0" : "bg-gray-100 hover:bg-gray-200 mx-auto"}
        active:scale-95
        shadow-sm
      `}
        >
          {isOpen ? (
            <XMarkIcon
              className="md:w-6 w-5 md:h-6 h-5 text-red-600 transform transition-transform duration-300 hover:rotate-90"
            />
          ) : (
            <Bars3Icon
              className="md:w-6 w-5 md:h-6 h-5 text-gray-800 transform transition-transform duration-300 hover:rotate-90"
            />
          )}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto mt-4">
        <p className="text-gray-400 hidden md:block w-fit text-xs md:text-sm ms-3 md:ms-5 md:mb-4 mb-2 border-b border-gray-200 md:pb-4 pb-2">MENU</p>
        <ul className="space-y-5 px-2">

          {/* Dashboard */}
          <li>
            <div
              onClick={() => toggleDropdown("dashboard")}
              className={`flex items-center ${isOpen ? "justify-between md:px-4 px-2" : "justify-center"} py-3 rounded-lg cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group`}
            >
              <div className="flex items-center gap-3">
                <FaTachometerAlt className={`transition-all duration-300 ${isOpen ? "w-5 h-5" : "md:w-6 w-5 md:h-6 h-5"}`} />
                {isOpen && <span className="text-xs md:text-sm font-medium">Dashboard</span>}
              </div>
              {isOpen && <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "dashboard" ? "rotate-180" : ""}`} />}
            </div>

            {isOpen && activeDropdown === "dashboard" && (
              <ul className="ml-10 mt-2 space-y-2 text-sm text-gray-600 animate-fadeIn">
                <li><Link href="/dashboard/analytics" className="text-xs md:text-sm hover:text-blue-600">Analytics</Link></li>
                <li><Link href="/dashboard/reports" className="text-xs md:text-sm hover:text-blue-600">Reports</Link></li>
                <li><Link href="/dashboard/sales" className="text-xs md:text-sm hover:text-blue-600">Sales</Link></li>
              </ul>
            )}
          </li>

          {/* Sales */}
          <li>
            <div
              onClick={() => toggleDropdown("sales")}
              className={`flex items-center ${isOpen ? "justify-between md:px-4 px-2" : "justify-center"} py-3 rounded-lg cursor-pointer hover:bg-green-50 hover:text-green-600 transition-all duration-200 group`}
            >
              <div className="flex items-center gap-3">
                <FaDollarSign className={`transition-all duration-300 ${isOpen ? "w-5 h-5" : "md:w-6 w-5 md:h-6 h-5"}`} />
                {isOpen && <span className="text-xs md:text-sm font-medium">Sales</span>}
              </div>
              {isOpen && <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "sales" ? "rotate-180" : ""}`} />}
            </div>

            {isOpen && activeDropdown === "sales" && (
              <ul className="ml-10 mt-2 space-y-2 text-sm text-gray-600 animate-fadeIn">
                <li><Link href="/sales/deals" className="text-xs md:text-sm hover:text-green-600">Deals</Link></li>
                <li><Link href="/sales/forecast" className="text-xs md:text-sm hover:text-green-600">Forecast</Link></li>
                <li><Link href="/sales/pipeline" className="text-xs md:text-sm hover:text-green-600">Pipeline</Link></li>
              </ul>
            )}
          </li>

          {/* Reports */}
          <li>
            <div
              onClick={() => toggleDropdown("reports")}
              className={`flex items-center ${isOpen ? "justify-between md:px-4 px-2" : "justify-center"} py-3 rounded-lg cursor-pointer hover:bg-purple-50 hover:text-purple-600 transition-all duration-200 group`}
            >
              <div className="flex items-center gap-3">
                <FaChartPie className={`transition-all duration-300 ${isOpen ? "w-5 h-5" : "md:w-6 w-5 md:h-6 h-5"}`} />
                {isOpen && <span className="text-xs md:text-sm font-medium">Reports</span>}
              </div>
              {isOpen && <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "reports" ? "rotate-180" : ""}`} />}
            </div>

            {isOpen && activeDropdown === "reports" && (
              <ul className="ml-10 mt-2 space-y-2 text-sm text-gray-600 animate-fadeIn">
                <li><Link href="/reports/monthly" className="text-xs md:text-sm hover:text-purple-600">Monthly</Link></li>
                <li><Link href="/reports/yearly" className="text-xs md:text-sm hover:text-purple-600">Yearly</Link></li>
              </ul>
            )}
          </li>

          {/* Users */}
          <li>
            <div
              onClick={() => toggleDropdown("users")}
              className={`flex items-center ${isOpen ? "justify-between md:px-4 px-2" : "justify-center"} py-3 rounded-lg cursor-pointer hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-200 group`}
            >
              <div className="flex items-center gap-3">
                <FaUsers className={`transition-all duration-300 ${isOpen ? "w-5 h-5" : "md:w-6 w-5 md:h-6 h-5"}`} />
                {isOpen && <span className="text-xs md:text-sm font-medium">Users</span>}
              </div>
              {isOpen && <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "users" ? "rotate-180" : ""}`} />}
            </div>

            {isOpen && activeDropdown === "users" && (
              <ul className="ml-10 mt-2 space-y-2 text-sm text-gray-600 animate-fadeIn">
                <li><Link href="/users/all" className="text-xs md:text-sm hover:text-yellow-600">All Users</Link></li>
                <li><Link href="/users/roles" className="text-xs md:text-sm hover:text-yellow-600">Roles</Link></li>
                <li><Link href="/users/permissions" className="text-xs md:text-sm hover:text-yellow-600">Permissions</Link></li>
              </ul>
            )}
          </li>

          {/* Settings */}
          <li>
            <div
              onClick={() => toggleDropdown("settings")}
              className={`flex items-center ${isOpen ? "justify-between md:px-4 px-2" : "justify-center"} py-3 rounded-lg cursor-pointer hover:bg-gray-50 hover:text-gray-800 transition-all duration-200 group`}
            >
              <div className="flex items-center gap-3">
                <FaCog className={`transition-all duration-300 ${isOpen ? "w-5 h-5" : "md:w-6 w-5 md:h-6 h-5"}`} />
                {isOpen && <span className="text-xs md:text-sm font-medium">Settings</span>}
              </div>
              {isOpen && <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "settings" ? "rotate-180" : ""}`} />}
            </div>

            {isOpen && activeDropdown === "settings" && (
              <ul className="ml-10 mt-2 space-y-2 text-sm text-gray-600 animate-fadeIn">
                <li><Link href="/profile" className="text-xs md:text-sm hover:text-gray-800">Profile</Link></li>
                <li><Link href="/preferences" className="text-xs md:text-sm hover:text-gray-800">Preferences</Link></li>
                <li><Link href="/billing" className="text-xs md:text-sm hover:text-gray-800">Billing</Link></li>
              </ul>
            )}
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;