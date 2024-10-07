// import Image from "next/image";
'use client'
import Aboutme from "./components/aboutme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/skills";
import Workscard from "./components/workscard";
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 left-0 w-full z-[1000]">
        <Header />
      </div>
      <Fade direction="right" triggerOnce><Hero /></Fade>
      <Fade  direction="left" triggerOnce><Aboutme /></Fade>
      <Fade  direction="up" triggerOnce><Skills /></Fade>
      <Fade  direction="down" triggerOnce><Workscard /></Fade>

    </div>
  );
}
