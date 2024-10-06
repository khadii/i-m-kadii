"use client"

import React, { useState, useEffect } from 'react'
import { Fade } from 'react-awesome-reveal'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { recentworks } from './recentworks'

export default function RotationalRevealSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer) // Ensure cleanup of interval on unmount or state change
  }, [currentSlide])

  const nextSlide = () => {
    setDirection('right')
    setCurrentSlide((prev) => (prev + 1) % recentworks.length)
  }

  const prevSlide = () => {
    setDirection('left')
    setCurrentSlide((prev) => (prev - 1 + recentworks.length) % recentworks.length)
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentSlide ? 'right' : 'left')
    setCurrentSlide(index)
  }

  return (
   <>
    <div className="relative w-full h-[400px] overflow-hidden" role="region" aria-live="polite" aria-label="Image slider">
      {recentworks.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'z-10 opacity-100' : 'z-0 opacity-0'
          }`}
          style={{
            transform: `perspective(1000px) rotateY(${
              index === currentSlide
                ? '0deg'
                : direction === 'right'
                ? '-90deg'
                : '90deg'
            })`,
            transformOrigin: direction === 'right' ? 'left center' : 'right center',
          }}
        >
          {/* Using Fade outside the main loop for better performance */}
          <Fade direction="up" triggerOnce>
            {slide.component}
          </Fade>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="hidden">
        <button 
          onClick={prevSlide}
          className="absolute top-1/3 left-6 z-20 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/3 right-6 z-20 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

    

    </div>
      {/* Slide Indicators */}
     {/* Slide Indicators */}
     <Fade direction="up" triggerOnce>
<div className='w-full flex justify-center mt-3'><div className=" space-x-4">
 {recentworks.map((_, index) => (
 
    <button
      key={index}
      onClick={() => handleDotClick(index)} 
      className={`w-4 h-4 border-[#022c22]  border-4  rounded-full transition-all duration-300 ${
        index === currentSlide
          ? 'bg-[#F1875E]'
          : 'bg-transparent border-gray-400 hover:border-gray-600 border-2'
      }`}
      aria-label={`Go to slide ${index + 1}`}
      aria-current={index === currentSlide ? 'true' : 'false'}
    />
  ))}
</div></div>
</Fade>
    </>
  )
}
