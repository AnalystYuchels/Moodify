import React from "react";

const moods = [
  { key: "happy", label: "😁", name: "Happy" },
  { key: "chill", label: "🙂", name: "Chill" },
  { key: "neutral", label: "😐", name: "Neutral" },
  { key: "sad", label: "😔", name: "Sad" },
  { key: "angry", label: "😠", name: "Angry" },
];

export default function MoodPicker({ value, onChange }) {
  return (
    <div>
      <div className="flex gap-4">
        {moods.map((m) => (
          <button
            key={m.key}
            onClick={() => onChange(m.key)}
            className={`text-4xl p-3 rounded-xl transition transform ${
              value === m.key ? "scale-110 ring-4 ring-primaryStart" : "hover:scale-105"
            }`}
            title={m.name}
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
}
