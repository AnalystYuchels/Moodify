import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Trends from "./pages/Trends";
import TrendDetail from "./pages/TrendDetail";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/trends/:id" element={<TrendDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
