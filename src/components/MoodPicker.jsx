function MoodPicker() {
  const moods = ["😁", "🙂", "😐", "😕", "😢"];
  return (
    <div className="flex gap-4 mt-4">
      {moods.map((mood, idx) => (
        <button key={idx} className="text-3xl hover:scale-125 transition">
          {mood}
        </button>
      ))}
    </div>
  );
}

export default MoodPicker;
