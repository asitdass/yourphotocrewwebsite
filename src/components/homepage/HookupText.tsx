import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HookupText: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Trigger when the component enters and leaves viewport
  });

  // Split the text into individual letters
  const hookupText =
    "We specialize in portrait photography for first-timers, so much so that all you have to do is just show up. Camera shy or out of poses? Don’t worry—we even hire someone to keep you laughing and posing naturally. And with our affordable prices, having great photos go from ‘good to have’ to ‘too good not to have’.";
  const letters = hookupText.split("");

  return (
    <div ref={ref} className="w-full h-screen flex items-center justify-center p-8 bg-[#F8F2EB]">
      <motion.div
        className="text-4xl md:text-6xl font-bold text-center max-w-4xl leading-tight"
        style={{ color: "#181818" }} // Base dark color
      >
        {letters.map((letter, index) => {
          // Calculate a staggered progress for each letter
          const letterProgress = useTransform(
            scrollYProgress,
            [index / letters.length, (index + 10) / letters.length], // Range for each letter
            [100, 900] // Font weight from normal to bold
          );

          return (
            <motion.span
              key={index}
              style={{
                fontWeight: letterProgress,
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default HookupText;
