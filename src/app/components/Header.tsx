"use client";

import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import React, { useState, useRef } from "react";
import { LuGithub } from "react-icons/lu";
import Modal from "./Modal";
import ContactForm from "./contact-form";
import { AttentionSeeker, Fade, Slide } from "react-awesome-reveal";
import { MessageCircleHeart, PhoneCall } from "lucide-react";
import "animate.css/animate.min.css";
import Link from "next/link";

export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  const cancelDropdownClose = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <div className="bg-[#051A16]">
      {isDropdownOpen && (
        <div
          className="absolute mt-20 z-50 w-[30%] right-2 hidden md:block"
          onMouseEnter={cancelDropdownClose}
          onMouseLeave={handleMouseLeave}
        >
          <ContactForm />
        </div>
      )}
      <div className="container mx-auto px-2 py-6 flex flex-row sm:flex-row justify-between items-center">
        <Fade direction="left">
          {" "}
          <div className="text-4xl md:text-5xl font-bold mb-4 md:mb-0  text-white">
            KHADI<span className="text-[#F1875E]">.</span>
          </div>
        </Fade>

        <div className="hidden sm:flex">
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
              <div className="bg-white p-2 rounded-full ">
                <Link href="https://wa.link/j9wqk3">
                  <MessageCircleHeart size={24} color="#F1875E" />
                </Link>
              </div>
              <div className="bg-white p-2 rounded-full">
                <Link href="https://www.linkedin.com/in/kadiri-daniel-3a6abb260/">
                  <LuGithub size={24} color="#F1875E" />
                </Link>
              </div>
              <AttentionSeeker
                effect="heartBeat"
                duration={2000}
                className="animate__animated animate__heartBeat animate__infinite "
              >
                <div
                  className="relative hidden md:block"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="text-white font-bold bg-[#F1875E] px-4 py-2 rounded-lg">
                    Contact me
                  </button>
                </div>
              </AttentionSeeker>
            </div>
          </Fade>
        </div>

        <div className="sm:hidden" onClick={openModal}>
          <Fade direction="right">
            {" "}
            <FiMenu size={28} color="#F1875E" />{" "}
          </Fade>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Slide direction="down">
          <div className="sm:hidden flex flex-col items-center space-y-4 mt-4">
            <div className="bg-white p-2 rounded-full">
              <Image
                src={"/images/ig.svg"}
                alt="Instagram Icon"
                width={24}
                height={24}
              />
            </div>
            <div className="bg-white p-2 rounded-full">
              <Link href="tel:09017169102">
                <PhoneCall size={24} color="#F1875E" />
              </Link>
            </div>
            <div className="bg-white p-2 rounded-full">
              <Link href="https://wa.link/j9wqk3">
                <MessageCircleHeart size={24} color="#F1875E" />
              </Link>
            </div>
            <div className="bg-white p-2 rounded-full">
              <Link href="https://www.linkedin.com/in/kadiri-daniel-3a6abb260/">
                <LuGithub size={24} color="#F1875E" />
              </Link>
            </div>
            <button
              className="text-white font-bold bg-[#F1875E] px-4 py-2 rounded-lg"
              onClick={toggleMobileDropdown}
            >
              {isMobileDropdownOpen === false ? "Contact me" : "X"}
            </button>
            {isMobileDropdownOpen && (
              <div className="w-full mt-4">
                <ContactForm />
              </div>
            )}
          </div>
        </Slide>
      </Modal>
    </div>
  );
}
