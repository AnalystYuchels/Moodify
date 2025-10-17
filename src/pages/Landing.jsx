import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { initiateAuth } from "../spotify";

export default function Landing() {
  const { isDarkMode } = useContext(ThemeContext);
  const wrapperClass = `min-h-screen flex flex-col items-center justify-start pt-24 px-6 transition-all duration-500 ${
    isDarkMode
      ? "bg-dark-gradient text-gray-100"
      : "bg-light-gradient text-gray-800"
  }`;

  return (
    <div className={wrapperClass}>
      <div className="max-w-3xl w-full text-center relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl shadow-xl p-10 mt-8 z-10">
        {/* Heading with emoji inline */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 inline-flex items-center gap-3 justify-center">
          <span className="text-5xl" aria-hidden="true" style={{ lineHeight: 1 }}>
            🎵
          </span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(90deg,#6D28D9,#FACC15)",
            }}
          >
            Welcome to Moodify
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 leading-relaxed mb-8">
          Discover playlists that match your mood — and let your emotions come alive through sound.
        </p>

        <div className="flex gap-6 justify-center">
          <button
            onClick={initiateAuth}
            className="btn btn-primary cursor-pointer"
            aria-label="Connect to Spotify"
          >
            Connect to Spotify
          </button>

          <Link
            to="/trends"
            className="btn btn-secondary cursor-pointer"
            aria-label="Explore Trends"
          >
            Explore Trends
          </Link>
        </div>
      </div>
    </div>
  );
}
