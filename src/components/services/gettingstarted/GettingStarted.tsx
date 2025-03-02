"use client";

import { ActionButton } from "./ActionButton";
import { StepItem } from "./StepItem";

const steps = [
  {
    number: 1,
    content: "Pick the shoot you want: a classic one or a café session",
  },
  {
    number: 2,
    content: "Fill out our quick booking form [Insert Link to Form]",
  },
  {
    number: 3,
    content: "Pick a date, a time, and tell us where",
  },
  {
    number: 4,
    content: "Done! Just show up, relax, and let us work our magic",
  },
];

export const GettingStarted = () => {
  const handleBookClick = () => {
    // Handle booking action
    console.log("Booking initiated");
  };

  return (
    <section className="m-16 getting-started-section relative bg-black/30 py-20 px-10 rounded-3xl overflow-hidden">
      {/* Background Image */}
      <img
        loading="lazy"
        src="assets/services/gettingstarted/image-7.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background decoration"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-white mb-8">
          Getting started is as easy as 1, 2, and 3
        </h1>

        {/* Steps */}
        <div className="steps-container flex flex-col gap-6 mt-12">
          {steps.map((step, index) => (
            <StepItem key={index} number={step.number} content={step.content} />
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <ActionButton text="Book a shoot" onClick={handleBookClick} />
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;