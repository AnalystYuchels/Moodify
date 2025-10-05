import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Trends from "./pages/Trends";

function App() {
  return (
    <Router>
      <nav className="p-4 flex justify-between bg-gradient-to-r from-pink-500 to-yellow-400 text-white">
        <h1 className="font-bold text-xl">🎶 Moodify</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/trends">Trends</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trends" element={<Trends />} />
      </Routes>
    </Router>
  );
}

export default App;
