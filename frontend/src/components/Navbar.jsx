import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navItems = ["Home", "Packages", "About", "Contact"];

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-emerald-600 tracking-tight">
          TravelUplift
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-700 hover:text-emerald-600 relative transition duration-300 font-medium"
            >
              {item}
              <span className="block h-[2px] w-0 group-hover:w-full bg-emerald-600 transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Call-to-action */}
        <div className="hidden md:block">
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700 transition text-sm font-medium">
            Book Now
          </button>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <Menu className="h-6 w-6 text-gray-800" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
