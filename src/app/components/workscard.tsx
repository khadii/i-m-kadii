"use client";

import React from "react";
// import { recentworks } from './recentworks';
import RotationalRevealSlider from "./Slider";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
// import ContactForm from './contact-form';
import Image from "next/image";
import { LuGithub } from "react-icons/lu";
import { Mail, MessageCircleHeart, PhoneCall } from "lucide-react";
import Link from "next/link";
// import { Slide } from 'react-awesome-reveal';

export default function Workscard() {
  return (
    <div className="bg-[#051916] mx-auto w-full flex flex-col  px-6 sm:px-10 py-10 sm:py-16">
      {/* Title */}
      <Fade direction="left" triggerOnce>
        {" "}
        <div className="w-full flex justify-left">
          <p className="flex text-[white] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold pb-8 sm:pb-10 md:pb-12 lg:pb-16">
            Recent &nbsp;
            <Image
              src="/images/starabt.svg"
              alt="Star Icon"
              width={50}
              height={50}
              className="rotate-icon"
            />{" "}
            &nbsp;Works
          </p>
        </div>
      </Fade>
      {/* <>content</> */}

      <RotationalRevealSlider />
      <div className=" justify-center w-full flex pt-7">
        <Fade direction="right">
          <div className="flex flex-row space-x-4 items-center">
            <AttentionSeeker
              effect="heartBeat"
              duration={2000}
              className="animate__animated animate__heartBeat animate__infinite "
            >
              <div className="bg-white p-2 rounded-full">
                <Link href="tel:09017169102">
                  <PhoneCall size={24} color="#F1875E" />
                </Link>
              </div>
            </AttentionSeeker>

            <AttentionSeeker
              effect="heartBeat"
              delay={1500}
              duration={2000}
              className="animate__animated animate__heartBeat animate__infinite "
            >
              <div className="bg-white p-2 rounded-full ">
                <Link href="https://wa.link/j9wqk3">
                  <MessageCircleHeart size={24} color="#F1875E" />
                </Link>
              </div>
            </AttentionSeeker>

            <AttentionSeeker
              effect="heartBeat"
              delay={2000}
              duration={2000}
              className="animate__animated animate__heartBeat animate__infinite "
            >
              <div className="bg-white p-2 rounded-full">
              <Link href="mailto:kadirid9@gmail.com">
                  <Mail size={24} color="#F1875E" />
                </Link>
              </div>
            </AttentionSeeker>
          </div>
        </Fade>
      </div>
    </div>
  );
}
