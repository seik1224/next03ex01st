import React from "react";

interface LoadingProps {
  progress: number;
}

const Loading = ({ progress }: LoadingProps) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-yellow-400">
      <div className="relative w-20 h-20">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            className="text-yellow-500"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
          />
          <circle
            className="text-white"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset="0"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-semibold text-white">100%</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
