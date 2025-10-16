import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"; // ✅ Fixed import
import Dashboard from "./pages/Dashboard";
import Trends from "./pages/Trends";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  const [font, setFont] = useState("Poppins, sans-serif");

  useEffect(() => {
    document.body.style.fontFamily = font;
  }, [font]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-800 via-purple-600 to-yellow-400 text-white transition-all duration-500">
        <Navbar />

        <main className="flex-grow flex justify-center items-center p-6">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/settings" element={<Settings setFont={setFont} />} />
          </Routes>
        </main>

        <footer className="text-center py-4 text-sm text-gray-200">
          © {new Date().getFullYear()} Moodify • Feel the Vibe 🎧
        </footer>
      </div>
    </Router>
  );
}
