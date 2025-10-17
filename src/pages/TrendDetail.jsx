import React from "react";
import { useParams, Link } from "react-router-dom";

export default function TrendDetail() {
  const { id } = useParams();

  const trend = {
    id,
    title: `Trend #${id}`,
    description:
      "This is where the details of the selected trend will appear. You can display playlist info, artist data, or mood-based suggestions.",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark transition-colors duration-500">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-primary dark:text-primary-light mb-4">
          {trend.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{trend.description}</p>
        <Link
          to="/trends"
          className="px-6 py-3 bg-primary text-white rounded-full shadow-md hover:bg-primary-dark transition"
        >
          ← Back to Trends
        </Link>
      </div>
    </div>
  );
}
