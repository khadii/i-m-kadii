"use client";

import { SendIcon, XIcon } from "lucide-react";
import data from '@/app/lib/data.json';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(formData.subject)}&body=Hi, my name is ${encodeURIComponent(formData.name)}. ${encodeURIComponent(formData.message)}`;
  };

  return (
    <div className="px-4 md:px-0 w-full"> {/* Responsive padding */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 md:gap-8 w-full"
      >
        {/* Name and Email Inputs */}
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8">
          <input
            {...register("name")}
            required
            type="text"
            placeholder="Your Name"
            className="w-full p-4 bg-[#4A4A4A] text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-[#F1875E] focus:ring-opacity-50"
          />
          <input
            {...register("email")}
            required
            type="email"
            placeholder="Your Email"
            className="w-full p-4 bg-[#4A4A4A] text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-[#F1875E] focus:ring-opacity-50"
          />
        </div>

        {/* Subject Input */}
        <input
          {...register("subject")}
          type="text"
          placeholder="Your Subject"
          className="w-full p-4 bg-[#4A4A4A] text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-[#F1875E] focus:ring-opacity-50"
        />

        {/* Message Textarea */}
        <textarea
          {...register("message")}
          required
          placeholder="Your Message"
          className="w-full h-40 md:h-48 p-4 bg-[#4A4A4A] text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-[#F1875E] focus:ring-opacity-50"
        />

        {/* Submit Button */}
        <div className="flex justify-center md:justify-start">
          <button
            type="submit"
            className="flex items-center justify-center text-center rounded-md uppercase font-semibold text-sm  px-4 bg-transparent border border-[#F1875E] hover:bg-[#F1875E] transition-colors duration-300 py-4"
          >
            Send Message <SendIcon className="ml-2 md:ml-4" size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
// "use client";

// import { SendIcon, XIcon } from "lucide-react"; // Import the cancel icon
// import data from '@/app/lib/data.json';
// import { useForm, SubmitHandler } from "react-hook-form";
// import { useState } from "react";
// import { useState } from "react"; // Import useState for managing form visibility

// type Inputs = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

export  function ContactForm2({ Close }: { Close: () => void }) {
  // const [isOpen, setIsOpen] = useState(true); // State to manage form visibility
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(formData.subject)}&body=Hi, my name is ${encodeURIComponent(formData.name)}. ${encodeURIComponent(formData.message)}`;
  };

  // Function to handle closing the form
  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  // if (!isOpen) return null; // Return null if the form is closed

  return (
    <div className="px-4 md:px-0 w-full"> {/* Responsive padding */}
      <div className="flex justify-between items-center mb-4"> {/* Container for cancel icon */}
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <XIcon className="cursor-pointer" size={24} onClick={Close} /> {/* Cancel icon */}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 md:gap-8 w-full"
      >
        {/* Name and Email Inputs */}
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8">
          <input
            {...register("name")}
            required
            type="text"
            placeholder="Your Name"
            className="w-full p-4 bg-[#4A4A4A] text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-[#F1875E] focus:ring-opacity-50"
          />
          <input
            {...register("email")}
            required
            type="email"
            placeholder="Your Email"
            className="w-full p-4 bg-[#4A4A4A] text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-[#F1875E] focus:ring-opacity-50"
          />
        </div>

        {/* Subject Input */}
        <input
          {...register("subject")}
          type="text"
          placeholder="Your Subject"
          className="w-full p-4 bg-[#4A4A4A] text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-[#F1875E] focus:ring-opacity-50"
        />

        {/* Message Textarea */}
        <textarea
          {...register("message")}
          required
          placeholder="Your Message"
          className="w-full h-40 md:h-48 p-4 bg-[#4A4A4A] text-white rounded-md border-none focus:outline-none focus:ring-2 focus:ring-[#F1875E] focus:ring-opacity-50"
        />

        {/* Submit Button */}
        <div className="flex justify-center md:justify-start">
          <button
            type="submit"
            className="flex items-center justify-center text-center rounded-md uppercase font-semibold text-sm px-4 bg-transparent border border-[#F1875E] hover:bg-[#F1875E] transition-colors duration-300 py-4"
          >
            Send Message <SendIcon className="ml-2 md:ml-4" size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
