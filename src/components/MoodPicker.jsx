import React, { useState } from "react";

export default function MoodPicker({ onMoodSelect }) {
  const moods = [
    { name: "Happy", color: "bg-yellow-400" },
    { name: "Angry", color: "bg-red-500"},
    { name: "Relaxed", color: "bg-blue-400" },
    { name: "Energetic", color: "bg-pink-500" },
    { name: "Focused", color: "bg-purple-500" },
  ];

  const [selected, setSelected] = useState(null);

  const handleSelect = (mood) => {
    setSelected(mood.name);
    onMoodSelect?.(mood.name);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {moods.map((mood) => (
        <button
          key={mood.name}
          onClick={() => handleSelect(mood)}
          className={`px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${mood.color} ${
            selected === mood.name
              ? "ring-4 ring-accent ring-offset-2 scale-105"
              : "opacity-90 hover:opacity-100"
          }`}
        >
          {mood.name}
        </button>
      ))}
    </div>
  );
}
