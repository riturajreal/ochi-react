import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {/* <div className='masker'>
                <h1 className='text-9xl leading-[4vw] tracking-tighter font-["Product_Sans"]'>We Create</h1>
            </div>

            <div className='masker'>
                <h1 className='text-9xl leading-[4vw] tracking-tighter font-["Product_Sans"]'>Eye Opening</h1>
            </div>

            <div className='masker'>
                <h1 className='text-9xl leading-[4vw] tracking-tighter font-["Product_Sans"]'>Presentations</h1>
            </div> */}

        {/* optimized way */}

        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
            <div className="w-fit flex items-end overflow-hidden">
            {index === 1 && (<div className="mr-[1vw] w-[8vw] h-[5.7vw] relative -top-[1vw] rounded bg-green-500"></div>)}
              <h1 className="pt-[2vw] -mb-[1vw] text-[9vw] h-full leading-[6vw] uppercase font-founders font-bold">
                {item}
              </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO ",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tighter leading-none"
          >
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] cursor-pointer border-zinc-400 text-xs font-light uppercase rounded-full hover:bg-white duration-500 hover:text-black">
            start the project
          </div>
          <div className="w-9 h-9 flex  items-center justify-center rounded-full border-[1px] cursor-pointer border-zinc-400 ">
            <span className="rotate-[45deg]"> <FaArrowUpLong /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
