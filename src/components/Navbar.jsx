import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const username = "Yuchels";
  const profileImage = null;

  return (
    <header
      className={`w-full backdrop-blur-lg shadow-lg sticky top-0 z-50 transition-all duration-500 
      ${
        isDarkMode
          ? "bg-gradient-to-r from-purple-900 via-purple-800 to-purple-950"
          : "bg-gradient-to-r from-purple-400 via-purple-100 to-purple-400"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center">
        {/* Left: logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="text-3xl">🎧</span>
          <span
            className={`text-3xl font-bold ${
              isDarkMode ? "text-yellow-350" : "text-yellow-500"
            }`}
          >
            Moodify
          </span>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right section */}
        <div className="flex items-center gap-8">
          {/* Nav links */}
          {["/", "/trends", "/dashboard", "/settings"].map((path, index) => {
            const names = ["Home", "Trends", "Dashboard", "Settings"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `font-medium border-b-2 ${
                    isActive
                      ? "border-yellow-500 text-yellow-400"
                      : "border-transparent hover:border-yellow-400 hover:text-yellow-400"
                  } transition-all duration-300 ${
                    isDarkMode ? "text-gray-100" : "text-gray-800"
                  }`
                }
              >
                {names[index]}
              </NavLink>
            );
          })}

          {/* Divider — more pronounced now */}
          <div className="w-px h-8 bg-yellow-400/70 mx-3 rounded-md"></div>

          {/* User info + Theme toggle */}
          <div className="flex items-center gap-3">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-yellow-500"
              />
            ) : (
              <span
                className={`font-semibold tracking-wide ${
                  isDarkMode ? "text-yellow-300" : "text-yellow-500"
                }`}
              >
                {username}
              </span>
            )}

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isDarkMode
                  ? "text-yellow-300 hover:text-yellow-400"
                  : "text-yellow-600 hover:text-yellow-700"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
