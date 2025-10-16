// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinkClass = (path) =>
    `relative pb-1 transition-all duration-300 font-medium ${
      location.pathname === path
        ? "text-yellow-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-400"
        : "text-gray-100 hover:text-yellow-300"
    }`;

  return (
    <header className="bg-gradient-to-r from-[#2B1E55] via-[#3E2C73] to-[#1F1A36] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl">🎵</span>
          <span className="font-bold text-2xl text-yellow-400">Moodify</span>
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-8 text-lg">
          <Link to="/" className={navLinkClass("/")}>
            Home
          </Link>
          <Link to="/dashboard" className={navLinkClass("/dashboard")}>
            Dashboard
          </Link>
          <Link to="/trends" className={navLinkClass("/trends")}>
            Trends
          </Link>
          <Link to="/settings" className={navLinkClass("/settings")}>
            Settings
          </Link>
        </nav>
      </div>
    </header>
  );
}
