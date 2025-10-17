import React, { useState } from "react";
import MoodPicker from "../components/MoodPicker";
import PlaylistDisplay from "../components/PlaylistDisplay";
import { getRecommendationsByMood } from "../spotify";

export default function MoodPage() {
  const [mood, setMood] = useState(null);
  const [playlistData, setPlaylistData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleMoodSelect = async (selectedMood) => {
    setMood(selectedMood);
    setLoading(true);
    setError("");

    try {
      const data = await getRecommendationsByMood(selectedMood.toLowerCase());
      setPlaylistData({
        tracks: data.tracks.map((t) => ({
          id: t.id,
          name: t.name,
          artists: t.artists,
          album: t.album,
          external_urls: t.external_urls,
        })),
      });
    } catch (err) {
      console.error(err);
      setError("Could not fetch playlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl font-bold mb-4 text-yellow-400">Pick Your Mood 🎶</h1>
      <p className="text-gray-400 mb-6 max-w-xl">
        Choose how you feel right now, and we’ll generate a playlist that matches your vibe.
      </p>

      <MoodPicker onMoodSelect={handleMoodSelect} />

      {loading && <p className="mt-6 text-accent animate-pulse">Fetching your playlist...</p>}
      {error && <p className="mt-6 text-red-500">{error}</p>}
      {playlistData && !loading && <PlaylistDisplay data={playlistData} />}
    </div>
  );
}
