import React from "react";

function ProgressBar({ progress }) {
  return (
    <div className="mt-5 w-80 overflow-hidden rounded-full bg-gray-300">
      <div
        className="h-4 rounded-full bg-green-700 text-center leading-4 text-white transition-all duration-500"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
}

export default function ProgressBarDemo() {
  return (
    <div className="flex flex-col items-center justify-center pt-50">
      <h1 className="text-5xl font-extrabold text-blue-600">
        Progress Bar
      </h1>

      <ProgressBar progress={90} />
    </div>
  );
}