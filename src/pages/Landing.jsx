import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { initiateAuth } from "../spotify";

export default function Landing() {
  const { isDarkMode } = useContext(ThemeContext);

  const wrapperClass = `relative min-h-screen flex flex-col items-center justify-start pt-28 px-6 transition-all duration-500 ${
    isDarkMode
      ? "bg-dark-gradient text-gray-100"
      : "bg-light-gradient text-gray-800"
  }`;

  return (
    <div className={wrapperClass}>
      {/* This ensures the text sits above gradient layers */}
      <div className="relative z-10 max-w-3xl w-full text-center bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl shadow-xl p-10 mt-8">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 inline-flex items-center gap-3 justify-center">
          <span
            className="bg-clip-text text-transparent"
          >
            Welcome to Moodify
          </span>
        </h1>

        {/* Paragraph — improved readability */}
        <p
          className={`text-lg md:text-xl leading-relaxed mb-8 ${
            isDarkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Discover playlists that match your mood — and let your emotions come
          alive through sound.
        </p>

        <div className="flex gap-6 justify-center">
          <button
            onClick={initiateAuth}
            className="btn btn-primary"
            aria-label="Connect to Spotify"
          >
            Connect to Spotify
          </button>

          <Link
            to="/trends"
            className="btn btn-secondary"
            aria-label="Explore Trends"
          >
            Explore Trends
          </Link>
        </div>
      </div>

      <Link
        to="/mood"
        className="mt-6 inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition-all"
      >
        Choose Your Mood 🎧
      </Link>
    </div>
  );
}
