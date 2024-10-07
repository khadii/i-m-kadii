'use client';

import React, { useEffect, useState } from 'react';

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  duration?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 100,
  strokeWidth = 10,
  duration = 5000, // default 5 seconds
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    let start: number;
    let animationFrame: number;
    let timeoutId: NodeJS.Timeout;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progressTime = timestamp - start;
      const newPercentage = Math.min((progressTime / duration) * percentage, percentage);

      setAnimatedPercentage(newPercentage);

      if (newPercentage < percentage) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Reset animation after a delay of 10 seconds (10000ms)
        timeoutId = setTimeout(() => {
          setAnimatedPercentage(0);
          start = 0;
          requestAnimationFrame(animate);
        }, 5000);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeoutId);
    };
  }, [percentage, duration]);

  return (
    <div className="flex justify-center items-center relative">
      <svg className="transform rotate-[-90deg]" width={size} height={size}>
        {/* Background Circle */}
        <circle
          stroke="#022c22"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress Circle */}
        <circle
          stroke="#F1875E"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          className="transition-all duration-100"
        />
      </svg>
      {/* Percentage in the middle */}
      <span
        className="absolute text-lg font-bold"
        style={{ fontSize: size / 5 }}
      >
        {Math.floor(animatedPercentage)}%
      </span>
    </div>
  );
};

export default CircularProgress;
