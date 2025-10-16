import React, { useState, useEffect } from "react";
import MoodPicker from "../components/MoodPicker";
import PlaylistDisplay from "../components/PlaylistDisplay";
import { getRecommendationsByMood, ensureValidToken, initiateAuth, getStoredAccessToken } from "../spotify";

function getLocalLogs() {
  try {
    const raw = localStorage.getItem("mood_logs");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function Dashboard() {
  const [mood, setMood] = useState("neutral");
  const [note, setNote] = useState("");
  const [result, setResult] = useState(null);
  const [logs, setLogs] = useState(getLocalLogs());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // ensure token; if not authenticated, prompt
    const token = getStoredAccessToken();
    if (!token) {
      // optionally, auto-initiate auth
      // do not auto redirect; show a button
    }
  }, []);

  async function handleGenerate() {
    const token = await ensureValidToken();
    if (!token) {
      // Prompt sign in
      const yes = window.confirm("You need to sign in to Spotify to get playlists. Connect now?");
      if (yes) {
        initiateAuth();
      }
      return;
    }

    setLoading(true);
    try {
      const data = await getRecommendationsByMood(mood);
      setResult(data);

      const newLog = {
        id: Date.now(),
        mood,
        note,
        date: new Date().toISOString(),
        tracks: data.tracks.map(t => ({ id: t.id, name: t.name, url: t.external_urls.spotify }))
      };
      const updated = [newLog, ...logs].slice(0, 50); // keep latest 50
      setLogs(updated);
      localStorage.setItem("mood_logs", JSON.stringify(updated));
      setNote("");
    } catch (err) {
      alert("Failed to get playlist: " + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Hey — how are you vibing today?</h2>

      <div className="bg-white p-6 rounded-xl shadow">
        <MoodPicker value={mood} onChange={setMood} />
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Optional note (quick thought, mood trigger...)"
          className="mt-4 w-full p-3 rounded-md border"
          rows={3}
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-4 w-full bg-gradient-to-r from-primaryStart to-primaryEnd text-white py-3 rounded-full font-semibold shadow"
        >
          {loading ? "Finding your vibe..." : "Generate Playlist 🎶"}
        </button>
      </div>

      {result && <PlaylistDisplay data={result} />}

      <section className="mt-6">
        <h3 className="font-semibold mb-2">Recent Mood Logs</h3>
        <div className="space-y-3">
          {logs.length === 0 && <div className="text-gray-500">No logs yet — try logging a mood!</div>}
          {logs.map((log) => (
            <div key={log.id} className="bg-white p-3 rounded-lg shadow flex justify-between items-start">
              <div>
                <div className="text-lg">{log.mood.toUpperCase()} • <span className="text-sm text-gray-500">{new Date(log.date).toLocaleString()}</span></div>
                {log.note && <div className="text-gray-700 mt-1">{log.note}</div>}
                <div className="mt-2 text-sm">
                  <strong>Tracks:</strong> {log.tracks.slice(0,3).map(t => t.name).join(" • ")}
                </div>
              </div>
              <div className="text-sm">
                <a className="text-blue-500 underline" href={log.tracks?.[0]?.url} target="_blank" rel="noreferrer">Open first track</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
