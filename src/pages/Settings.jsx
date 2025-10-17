import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [username, setUsername] = useState(localStorage.getItem("moodify_username") || "");
  const [profilePic, setProfilePic] = useState(localStorage.getItem("moodify_profilePic") || "");
  const [fontChoice, setFontChoice] = useState(localStorage.getItem("moodify_font") || "Poppins");

  useEffect(() => {
    localStorage.setItem("moodify_username", username);
  }, [username]);

  useEffect(() => {
    if (profilePic) localStorage.setItem("moodify_profilePic", profilePic);
  }, [profilePic]);

  useEffect(() => {
    localStorage.setItem("moodify_font", fontChoice);
    document.body.style.fontFamily = `${fontChoice}, sans-serif`;
  }, [fontChoice]);

  function handleImageUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setProfilePic(ev.target.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className={`app-bg ${theme === "dark" ? "bg-dark" : "bg-light"} flex items-center justify-center`}>
      <div className="page-container max-w-lg">
        <h2 className="h2">Account Settings</h2>

        <div className="flex flex-col items-center mb-6">
          <div className="avatar-placeholder mb-3">
            {profilePic ? (
              <img src={profilePic} alt="profile" className="w-full h-full object-cover rounded-full" />
            ) : (
              <span className="text-xl">🙂</span>
            )}
          </div>

          <label className="text-sm text-accent cursor-pointer">
            Upload Profile Picture
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>
        </div>

        <div className="mb-4 text-left">
          <label className="block mb-1 font-medium">Username</label>
          <input
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/40"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your display name"
          />
        </div>

        <div className="mb-4 text-left">
          <label className="block mb-1 font-medium">Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/40"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="mb-6 text-left">
          <label className="block mb-1 font-medium">Font</label>
          <select
            value={fontChoice}
            onChange={(e) => setFontChoice(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/40"
          >
            <option>Poppins</option>
            <option>Quicksand</option>
            <option>Nunito</option>
            <option>Inter</option>
          </select>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => alert("Settings saved")}
            className="btn btn-primary"
          >
            Save Changes
          </button>
          <button
            onClick={() => {
              setUsername("");
              setProfilePic("");
              localStorage.removeItem("moodify_profilePic");
            }}
            className="btn btn-secondary"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
