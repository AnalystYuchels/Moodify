import React from "react";

export default function PlaylistCard({ title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-glow hover:scale-[1.02] transition-all duration-300 p-6 text-center"
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-accent">{description}</p>
    </div>
  );
}
