import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500 cursor-pointer">
          <Link href="/">AirbnbClone</Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search destinations"
            className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Auth Buttons */}
        <div className="space-x-3">
          <button className="px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-50 transition">
            Sign In
          </button>
          <button className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav className="bg-gray-50 border-t">
        <ul className="flex justify-center space-x-6 py-3 text-gray-600 font-medium">
            <li> Accomodations types</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
