import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-start pt-20 px-6 transition-all duration-500 ${
        isDarkMode ? "bg-dark-gradient text-gray-100" : "bg-light-gradient text-gray-800"
      }`}
    >
      <div className="max-w-4xl w-full bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-3xl shadow-xl p-10 mt-8 text-center">
        <h1 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Your Dashboard 🎶
        </h1>
        <p className="text-lg text-gray-300 dark:text-gray-200 leading-relaxed">
          Welcome back! Here’s where your moods, playlists, and musical inspirations come together.
        </p>
      </div>
    </div>
  );
}
