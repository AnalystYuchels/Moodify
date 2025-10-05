function PlaylistCard() {
  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
      <h4 className="font-bold mb-2">🎵 Chill Vibes</h4>
      <p className="text-gray-600 mb-2">A playlist to match your current mood.</p>
      <a
        href="#"
        className="text-blue-500 underline hover:text-blue-700"
      >
        ▶️ Play on Spotify
      </a>
    </div>
  );
}

export default PlaylistCard;
