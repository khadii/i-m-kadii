"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";
import { AttentionSeeker, Fade, Flip } from "react-awesome-reveal";
import "animate.css/animate.min.css";
// import 'global.css'

export default function Aboutme() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const [trigger, setTrigger] = useState(0);
  const [flipKey, setFlipKey] = useState(0);
     // Define the colors you want to cycle through
     const colors = ['#0000000D','#0000004D', '#00000033', ];
    
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
   

  useEffect(() => {
    // Set interval to trigger Flip animation every 4 seconds
    const interval = setInterval(() => {
      setFlipKey((prevKey) => prevKey + 1);
    }, 4000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  // Intersection Observer for checking if section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Trigger re-render every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full ">
      {/* Background Text */}
      <div className="container mx-auto absolute z-20 w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1
          className="text-transparent text-6xl sm:text-7xl md:text-9xl font-bold pb-6"
          style={{
            WebkitTextStroke: `2px ${colors[currentColorIndex]}`,
          }}
        >
          Fullstack Web Developer
        </h1>
      </div>

      {/* Main Content */}
      <div
        ref={sectionRef}
        className="mx-auto w-full flex flex-col md:flex-row bg-white px-6 sm:px-10 py-10 sm:py-16 relative justify-between z-10"
      >
        <div className="w-full md:w-[40%] flex flex-col space-y-6 sm:space-y-10">
          <p className="flex font-bold text-2xl sm:text-3xl md:text-4xl">
            Kadiri&nbsp;
            <Image
              src="/images/starabt.svg"
              alt="Star Icon"
              width={22}
              height={22}
              className="rotate-icon"
            />
            &nbsp;Daniel
          </p>
          <Flip  key={flipKey} > <p className="text-[#3A3A3A] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
            Best Creative <br /> & Modern Designs
          </p></Flip>
        </div>

        <div className="hidden md:block w-[10%]"></div>

        <div className="w-full md:w-[60%] flex flex-col mt-8 md:mt-0">
          <div className="w-full flex justify-end">
          <Flip >
            <p className="text-[#3A3A3A] font-bold text-base sm:text-lg md:text-xl">
              PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE
              INTERSECTION OF CREATIVITY AND USER-FRIENDLY INTERFACES. I CREATE
              MEMORABLE WEB EXPERIENCES.
            </p></Flip>
          </div>

          <div className="mt-5">
            <Fade direction="right">
            <p className="text-[#9C9C9C] text-xs sm:text-sm md:text-base">
              With a background in design, I work closely with design-focused
              teams to build websites and microsites for companies and
              individuals. I have years of experience working and collaborating
              on product teams and leading engineering efforts. <br />
              <br />
              With my experience over the years, I solve product
              problems and build appealing, usable web experiences.
            </p></Fade>
          </div>

          <div className="flex flex-row w-full justify-center space-x-5 mt-5">
            {/* Years of Experience */}
            
            <div className="flex flex-col w-1/5">
              <p className="text-[#3A3A3A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex justify-center">
                {inView && (
                  <CountUp
                    key={trigger}
                    start={0}
                    end={3}
                    duration={2}
                    suffix="+"
                  />
                )}
              </p>
              <p className="text-[#3A3A3A] text-xs sm:text-sm md:text-base font-bold text-center">
                Years of Experience
              </p>
            </div>

            {/* Projects Completed */}
            <div className="flex flex-col w-1/5">
              <p className="text-[#3A3A3A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex justify-center">
                {inView && (
                  <CountUp
                    key={trigger}
                    start={0}
                    end={10}
                    duration={2}
                    suffix="+"
                  />
                )}
              </p>
              <p className="text-[#3A3A3A] text-xs sm:text-sm md:text-base font-bold text-center">
                Projects Completed
              </p>
            </div>

            {/* Team Collaborations */}
            <div className="flex flex-col w-1/5">
              <p className="text-[#3A3A3A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex justify-center">
                {inView && (
                  <CountUp
                    key={trigger}
                    start={0}
                    end={5}
                    duration={2}
                    suffix="+"
                  />
                )}
              </p>
              <p className="text-[#3A3A3A] text-xs sm:text-sm md:text-base font-bold text-center">
                Team Collaborations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Download CV Section */}
      
      <div className="bg-white flex justify-center p-6 md:p-10 pb-14">
        <div className="rounded-full uppercase font-semibold text-lg sm:text-xl py-3 sm:py-5 px-6 sm:px-12 bg-transparent border border-[#F1875E] hover:bg-[#F1875E] w-full md:w-1/2 lg:w-1/3">
          <AttentionSeeker
            effect="heartBeat"
            duration={2000}
            className="animate__animated animate__heartBeat animate__infinite "
          >
            <div>
              <Link
                href="/cv_template.pdf"
                target="_blank"
                className="flex items-center space-x-2 sm:space-x-4"
              >
                <div className="flex justify-center w-full space-x-2 sm:space-x-3">
                  <span>Download CV</span>
                  <DownloadIcon
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    color="#F1875E"
                  />
                </div>
              </Link>
            </div>
          </AttentionSeeker>
        </div>
      </div>
    </div>
  );
}
