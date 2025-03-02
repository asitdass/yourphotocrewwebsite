"use client";

import React from "react";
import { FeatureCard } from "./FeatureCard";

export const FeaturesSection = () => {
  const features = [
    {
      icon: "assets/services/features/pe.svg",
      title: "Personalized Experience",
      description: "Only 2 people per photographer for focused attention",
    },
    {
      icon: "assets/services/features/pt.svg",
      title: "Professional Team",
      description: "Dedicated assistant to help with poses and candid moments",
    },
    {
      icon: "assets/services/features/ap.svg",
      title: "Affordable Pricing",
      description: "500/theme (weekdays),\n600/theme (weekends)",
    },
    {
      icon: "assets/services/features/wi.svg",
      title: "Wardrobe Included",
      description:
        "Thematic wardrobe provided for males (females can bring their own)",
    },
  ];

  return (
    <section className="m-16 overflow-hidden text-black">
      <div className="p-12 w-full bg-orange-50 rounded-3xl max-md:px-5 max-md:max-w-full">
        <header className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
          <h2 className="text-3xl font-extrabold w-[392px]">
            What makes us stand out of the crowd?
          </h2>
          <p className="flex-1 shrink text-lg leading-8 basis-0 max-md:max-w-full">
            Think photoshoots are only for fancy occasions or dating apps? Nope.
            They're for everyone, and here's why:
          </p>
        </header>

        <div className="flex flex-wrap gap-8 items-start mt-10 w-full max-md:max-w-full">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
