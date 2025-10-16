import React, { useState } from "react";

export default function Settings({ setFont }) {
  const [selectedFont, setSelectedFont] = useState("Poppins, sans-serif");

  const handleFontChange = (e) => {
    const newFont = e.target.value;
    setSelectedFont(newFont);
    setFont(newFont);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl w-full max-w-lg text-white">
      <h2 className="text-3xl font-bold mb-6 text-yellow-300">
        Customize Your Moodify Experience 🪄
      </h2>

      <div className="mb-6">
        <label htmlFor="font" className="block mb-2 text-gray-200 font-medium">
          Choose Your Font:
        </label>
        <select
          id="font"
          value={selectedFont}
          onChange={handleFontChange}
          className="w-full p-3 rounded-md bg-white/20 border border-yellow-300 text-white"
        >
          <option value="Poppins, sans-serif">Poppins</option>
          <option value="Quicksand, sans-serif">Quicksand</option>
          <option value="Nunito, sans-serif">Nunito</option>
          <option value="Caveat, cursive">Caveat</option>
          <option value="Pacifico, cursive">Pacifico</option>
          <option value="Lato, sans-serif">Lato</option>
        </select>
      </div>

      <p className="text-gray-200">
        More customization options coming soon — change themes, set moods, and
        personalize your music journey. 💫
      </p>
    </div>
  );
}
