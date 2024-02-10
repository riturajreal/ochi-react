import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full py-10 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap font-founders font-bold uppercase">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[24vw] leading-none pt-5 -mb-[7vw]"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[24vw] leading-none pt-5 -mb-[7vw]"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[24vw] leading-none pt-5 -mb-[7vw]"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
