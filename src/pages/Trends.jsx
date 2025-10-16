import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function mapMoodToValue(m) {
  switch (m) {
    case "happy": return 4;
    case "chill": return 3;
    case "neutral": return 2;
    case "sad": return 1;
    case "angry": return 0;
    default: return 2;
  }
}

export default function Trends() {
  const raw = localStorage.getItem("mood_logs");
  const logs = raw ? JSON.parse(raw) : [];
  const data = logs.slice().reverse().map((l, idx) => ({
    name: new Date(l.date).toLocaleDateString(),
    value: mapMoodToValue(l.mood)
  })).slice(-20); // last 20 records

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">📈 Your Mood Journey</h2>

      <div className="bg-white rounded-xl shadow p-4">
        {data.length === 0 ? (
          <div className="text-gray-500">No mood logs yet — log a mood from the Dashboard to see trends.</div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis domain={[0,4]} ticks={[0,1,2,3,4]} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8A5CF6" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
