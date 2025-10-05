function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-yellow-400 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">🌈 Turn Your Mood Into Music</h2>
      <p className="mb-6 max-w-md">
        Log your vibe, get a playlist, discover your personal soundtrack.
      </p>
      <a
        href="/dashboard"
        className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg shadow-md hover:scale-105 transition"
      >
        Log My Mood 🎧
      </a>
    </div>
  );
}

export default Landing;
