import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center text-white">
      <h1 className="text-5xl font-extrabold mb-4 text-yellow-300 animate-pulse">
        Welcome to Moodify 🎶
      </h1>
      <p className="text-lg text-gray-200 mb-8">
        Discover playlists that match your current vibe and mood.  
        Let’s bring your emotions to life through music.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="https://accounts.spotify.com/authorize"
          className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
          Connect to Spotify
        </a>
        <Link
          to="/trends"
          className="border-2 border-yellow-300 hover:bg-yellow-300 hover:text-purple-900 font-semibold py-3 px-6 rounded-full transition-all transform hover:scale-105"
        >
          Explore Trends
        </Link>
      </div>

      <div className="mt-10">
        <Link
          to="/settings"
          className="underline text-sm text-gray-300 hover:text-yellow-300 transition"
        >
          Customize your account →
        </Link>
      </div>
    </section>
  );
}
