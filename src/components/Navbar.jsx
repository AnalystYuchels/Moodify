import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const user = {
  username: "Yuchels",
  avatar: "",
};

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`w-full backdrop-blur-lg shadow-lg sticky top-0 z-50 transition-all duration-500 
      ${
        isDarkMode
          ? "bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950"
          : "bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center">
        {/* Left: logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="text-3xl">🎧</span>
          <span
            className={`text-2xl font-bold ${
              isDarkMode ? "text-accent" : "text-primary-dark"
            }`}
          >
            Moodify
          </span>
        </Link>

        {/* Push nav links to the right */}
        <div className="flex-1" />

        {/* Nav links */}
        <div className="flex items-center gap-8">
          {[
            { to: "/", label: "Home" },
            { to: "/trends", label: "Trends" },
            { to: "/dashboard", label: "Dashboard" },
            { to: "/settings", label: "Settings" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-medium border-b-2 ${
                  isActive
                    ? "border-accent text-accent"
                    : "border-transparent hover:border-accent hover:text-accent"
                } transition-all duration-300 ${
                  isDarkMode ? "text-gray-100" : "text-gray-800"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full hover:scale-110 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <span className="text-yellow-400 text-xl">☀️</span>
            ) : (
              <span className="text-indigo-700 text-xl">🌙</span>
            )}
          </button>

          {/* User avatar / username */}
          <div className="ml-6 flex items-center">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-accent"
              />
            ) : (
              <span className="text-accent font-semibold">{user.username}</span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
