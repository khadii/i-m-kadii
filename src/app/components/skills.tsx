'use client'
import React from 'react';
import CircularProgress from './progress';
import data from '../lib/data.json';
import { Fade } from 'react-awesome-reveal';

export default function Skills() {
  return (
    <div className="mx-auto w-full bg-[#051A16] px-4 sm:px-6 md:px-10 lg:px-12 py-10 sm:py-12 md:py-16 lg:py-20 relative justify-center">
      {/* Title */}
      <Fade direction="down" triggerOnce> <div className="w-full flex justify-center">
        <p className="pb-8 sm:pb-10 md:pb-12 lg:pb-16 text-[#F1875E] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          <span className="text-white"> MY</span> SKILLS
        </p>
      </div>
      </Fade>
      {/* Skills List */}
      <div className="w-full">
      <Fade direction="up" triggerOnce>
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
    {data.skills.map((item) => (
      <div
        className="mx-4 my-2  flex flex-col items-center"
        key={item.percentage}
      >
        {/* Circular Progress for each skill */}
        <CircularProgress
          percentage={item.percentage}
          size={100} // Adjusted size for better scaling
          strokeWidth={10}
        />
        {/* Skill Name */}
        <p className="mt-4 text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl text-white">
          {item.skill}
        </p>
      </div>
    ))}
  </div>
  </Fade>
</div>

    </div>
  );
}
