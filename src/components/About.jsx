import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] text-black rounded-2xl">
      <h1 className="text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-5 border-t-[1px] pt-10 mt-20 border-[#6f7c3d]">
        <div className="w-1/2">
          <h1 className="text-5xl">Our approach:</h1>
          <button className="px-10 py-4 mt-5 flex items-center gap-10 uppercase bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="w-full h-[60vh] rounded-2xl bg-red-600 overflow-hidden">
          <img
            className="object-cover object-center w-full h-full"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
