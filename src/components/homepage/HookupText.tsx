import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HookupText: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Triggers animation within viewport
  });

  const hookupText =
    "Our goal is to make high-quality candid photoshoots accessible to the average middle class. Our aim is to be the digital version of the same ‘physical album’ which our parents/grandparents used to have with a bunch of timeless clicks. We operate such that all you have to say is yes & the rest is taken care of. We go above & beyond to ensure that every shoot is a success.";

  const letters = hookupText.split("");

  return (
    <section className="w-full h-[40vh] flex items-center justify-center">
      <div ref={ref} className="max-w-4xl px-6">
        <motion.p
          className="text-lg md:text-xl font-light text-justify leading-relaxed text-[#181818]"
        >
          {letters.map((letter, index) => {
            const letterWeight = useTransform(
              scrollYProgress,
              [index / letters.length , (index + 5) / letters.length], // Faster transition
              [200, 800] // Lighter to bold effect
            );

            return (
              <motion.span key={index} style={{ fontWeight: letterWeight }}>
                {letter}
              </motion.span>
            );
          })}
        </motion.p>
      </div>
    </section>
  );
};

export default HookupText;
