"use client";

import { motion } from "framer-motion";



export default function TextCarousel(props:any) {
  return (
    <div className="absolute top-[90%] -translate-y-1/2  overflow-hidden pointer-events-none">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="flex shrink-0 text-[4rem] md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter select-none text-white/30 whitespace-nowrap">
          <span className="mx-8">{props.text}</span>
          <span className="mx-8">{props.text}</span>
          <span className="mx-8">{props.text}</span>
          <span className="mx-8">{props.text}</span>
        </div>
      </motion.div>
    </div>
  );
}