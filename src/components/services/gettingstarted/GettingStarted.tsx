"use client";

import { BorderDecoration } from "./BorderDecoration";
import { StepItem } from "./StepItem";
import { ActionButton } from "./ActionButton";

const steps = [
  "Pick the shoot you want: a classic one or a café session",
  "Fill out our quick booking form [Insert Link to Form]",
  "Pick a date, a time, and tell us where",
  "Done! Just show up, relax, and let us work our magic",
];

export const GettingStarted = () => {
  const handleBookClick = () => {
    // Handle booking action
    console.log("Booking initiated");
  };

  return (
    <section className="flex overflow-hidden relative flex-col items-start px-16 py-56 rounded-3xl min-h-[579px] max-md:px-5 max-md:py-24">
      <img
        loading="lazy"
        src="assets/services/gettingstarted/image-7.png"
        className="object-cover absolute inset-0 size-full"
        alt="Background decoration"
      />

      <BorderDecoration />

      <div className="flex relative flex-col mt-0 max-w-full w-[619px]">
        <div className="w-full text-black">
          <h1 className="text-5xl font-bold leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
            Getting started is as easy as 1, 2 and 3
          </h1>

          <div className="mt-6 w-full max-md:max-w-full">
            {steps.map((step, index) => (
              <div key={index} className={index > 0 ? "mt-6" : ""}>
                <StepItem number={index + 1} content={step} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-8 items-center self-start mt-12 max-md:mt-10">
          <ActionButton text="Book a shoot" onClick={handleBookClick} />
        </div>
      </div>

      <BorderDecoration />
      <BorderDecoration />
    </section>
  );
};

export default GettingStarted;
