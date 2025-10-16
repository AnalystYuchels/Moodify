export default function PlaylistCard({ title = "Chill Vibes", description = "A playlist to match your current mood", href = "#" }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primaryStart to-primaryEnd rounded-lg flex items-center justify-center text-white text-2xl">🎧</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-600">{description}</div>
        </div>
        <div className="ml-auto">
          <a href={href} className="text-blue-500 underline">Open</a>
        </div>
      </div>
    </div>
  );
}
