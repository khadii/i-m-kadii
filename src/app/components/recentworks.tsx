import Image from "next/image";
import data from "../lib/data.json";
import Link from "next/link";

export const recentworks = data.projects.map((project, index) => ({
  id: index + 1,
  component: (
    <div className="w-full flex flex-col md:flex-row justify-between">
      {/* Left Column */}
      <div className="w-full md:w-[40%] flex flex-col justify-end pb-8 md:pb-16">
        <p className="mb-4 md:mb-6 text-lg md:text-2xl font-bold">
          {project.title}
        </p>
        <div className="w-full md:w-72">
          <p className="text-sm md:text-base">{project.discription}</p>
        </div>
        <div className="w-full mt-4 md:mt-6">
          <Link href={project.url}>
            <button className="bg-white font-bold text-[#F1875E] px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-md hover:bg-[#f07850] transition-all duration-300 hover:text-white">
              Explore
            </button>
          </Link>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-[60%] flex flex-col justify-center mt-8 md:mt-0">
        <div className="w-full flex justify-center pb-4">
          <div className="w-[90%] sm:w-[90%] md:w-[90%] h-full min-h-[75vh] sm:min-h-[75vh] md:min-h-[75vh] mx-auto rounded-lg overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={1920}
              height={1080}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <p className="justify-center flex w-full text-lg md:text-2xl font-bold">
          {project.title}
        </p>
      </div>
    </div>
  ),
}));
