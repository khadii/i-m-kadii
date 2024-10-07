"use client";

import { useEffect, useState } from "react";
import { Fade, Rotate } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

// import React, { useState } from "react";

export default function Hero() {
  
    // Define the colors you want to cycle through
    const colors = ['#134f44', '#F1875E', '#3A3A3A', 'white'];
    
    // State to keep track of the current color index
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    
    // Update color every 2 seconds
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentColorIndex((prevIndex:any) => (prevIndex + 1) % colors.length);
      }, 2000);
  
      // Cleanup interval on unmount
      return () => clearInterval(intervalId);
    }, []);
  

  return (
    <div>
      <div
        className="bg-image bg-cover bg-center bg-no-repeat flex flex-col px-4 py-6 pt-10 sm:pt-20 relative"
        style={{
          backgroundImage: 'url("/images/bg.svg")',
          minHeight: "70vh",  // Ensures the height is responsive
          height: "auto",
        }}
      >
        {/* Main Heading */}
        <div className="container mx-auto relative z-10 text-center mt-auto"> {/* Added mt-auto */}
          <h1
           className="text-transparent text-6xl sm:text-7xl md:text-9xl font-bold pb-6"
           style={{
            WebkitTextStroke: `1px ${colors[currentColorIndex]}`,
          }}
          >
            Fullstack Web Developer
          </h1>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <img
            src="/images/ig.svg"
            alt="Index"
            className="w-24 h-24 sm:w-48 sm:h-48 object-contain" // Adjust image size for mobile
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between w-full relative z-10 items-center space-y-5 sm:space-y-0 sm:px-6 mt-auto"> {/* Added mt-auto */}
          {/* Left Column */}
          <div className="flex flex-col space-y-3 sm:space-y-5 sm:w-1/2 w-full justify-center items-center sm:items-start text-center sm:text-left">
            {/* Text */}
            <div className="text-2xl sm:text-4xl md:text-6xl font-bold">
            <Fade direction="right" triggerOnce><p className="hidden sm:block">
               Hey There,<br /> I’m Khadi
              </p></Fade> 
              <Fade direction="up" triggerOnce >  <p className="sm:hidden">Hey There, I’m Khadi</p> </Fade> {/* Mobile view */}
            </div>

            {/* Button */}
            <Fade direction="up" triggerOnce >
            <div className="flex justify-center sm:justify-start w-full">
              <button className="text-white font-bold bg-[#F1875E] px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md hover:bg-[#f07850] transition-all duration-300 text-sm sm:text-base">
                Fullstack dev
              </button>
            </div></Fade>
          </div>

          {/* Right Column */}
          <div className="flex sm:w-1/2 justify-center sm:justify-end w-full">
      <div className="w-full sm:max-w-md text-sm sm:text-xs">
        {/* For small screens */}
        <p className="text-center sm:text-left sm:hidden">
          <Typewriter
            words={[
              "A passionate web developer with expertise in creating dynamic and responsive web applications. With  years of experience in the industry, I have honed my skills in various technologies including HTML, CSS, JavaScript, React.js, and Next.js."
            ]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>

        {/* For medium screens */}
        <p className="hidden sm:block md:hidden">
          <Typewriter
            words={[
              "A passionate web developer with expertise in creating dynamic and responsive web applications. With  years of experience in the industry, I have honed my skills in various technologies including HTML, CSS, JavaScript, React.js, and Next.js."
            ]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>

        {/* For large screens */}
        <p className="hidden md:flex justify-end">
          <Typewriter
            words={[
              "A passionate web developer with expertise in creating dynamic and responsive web applications. With years of experience in the industry, I have honed my skills in various technologies including HTML, CSS, JavaScript, React.js, and Next.js."
            ]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
