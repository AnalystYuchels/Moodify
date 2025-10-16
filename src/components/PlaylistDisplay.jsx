import React from "react";

export default function PlaylistDisplay({ data }) {
  if (!data) return null;
  const { tracks } = data;
  if (!tracks || tracks.length === 0) return <p>No tracks found.</p>;

  return (
    <div className="bg-white rounded-xl shadow p-4 mt-4">
      <h3 className="font-bold mb-2">Suggested Tracks</h3>
      <ol className="space-y-2">
        {tracks.map((t) => (
          <li key={t.id} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={t.album.images?.[2]?.url} alt="cover" className="w-12 h-12 rounded" />
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-gray-500">{t.artists.map(a => a.name).join(", ")}</div>
              </div>
            </div>
            <a href={t.external_urls.spotify} target="_blank" rel="noreferrer" className="text-blue-500 underline">Open</a>
          </li>
        ))}
      </ol>
    </div>
  );
}
