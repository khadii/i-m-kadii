'use client'

import React from 'react'
// import { recentworks } from './recentworks';
import  RotationalRevealSlider  from './Slider';
import { Fade } from 'react-awesome-reveal';
// import ContactForm from './contact-form';
// import { Slide } from 'react-awesome-reveal';

export default function Workscard() {
  return (
    <div className="bg-[#051916] mx-auto w-full flex flex-col  px-6 sm:px-10 py-10 sm:py-16">
      {/* Title */}
      <Fade direction="left" triggerOnce> <div className="w-full flex justify-left">
        <p className="pb-8 sm:pb-10 md:pb-12 lg:pb-16 text-[white] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
          Recent Works
        </p>
       
      </div></Fade> 
     {/* <>content</> */}
    
<RotationalRevealSlider/>
     
    </div>
  );
}
