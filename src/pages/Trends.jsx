import React from "react";
import { useNavigate } from "react-router-dom";

export default function Trends() {
  const navigate = useNavigate();

  const trends = [
    { id: 1, title: "Feel-Good Beats", mood: "Happy" },
    { id: 2, title: "Calm & Cozy", mood: "Relaxed" },
    { id: 3, title: "Deep Focus", mood: "Productive" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-24 bg-light-gradient dark:bg-dark-gradient transition-all duration-500 px-4">
      <div className="max-w-5xl w-full mx-auto my-12">
        <h2 className="text-4xl font-extrabold mb-6">Trending Moods 🔥</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {trends.map((t) => (
            <article
              key={t.id}
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/trends/${t.id}`)}
              onKeyDown={(e) => { if (e.key === "Enter") navigate(`/trends/${t.id}`); }}
              className="cursor-pointer bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-glow hover:scale-[1.02] transition-all duration-300 p-6 text-center"
            >
              <h3 className="text-2xl font-semibold mb-2">{t.title}</h3>
              <p className="text-accent">{t.mood}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
