import MoodPicker from "../components/MoodPicker";
import PlaylistCard from "../components/PlaylistCard";

function Dashboard() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Hey, how are you vibing today?</h2>
      <MoodPicker />
      <textarea
        className="w-full border rounded-lg p-3 mt-4"
        placeholder="Want to jot a quick note?"
      />
      <button className="mt-4 w-full bg-gradient-to-r from-indigo-500 to-blue-400 text-white py-3 rounded-lg shadow-md">
        Generate Playlist 🎶
      </button>

      <h3 className="text-xl font-semibold mt-8 mb-2">Your Playlist</h3>
      <PlaylistCard />
    </div>
  );
}

export default Dashboard;
