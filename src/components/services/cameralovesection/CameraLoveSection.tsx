import React from "react";
import { BenefitPoint } from "./BenefitPoint";
import { Divider } from "./Divider";

export const CameraLoveSection = () => {
  const benefits = [
    {
      icon: "/assets/services/cameralovesection/arrow.svg",
      title: "Stand Out Online",
      description:
        "First impressions are digital. Whether it's for dating apps or LinkedIn, great photos open doors.",
    },
    {
      icon: "/assets/services/cameralovesection/arrow.svg",
      title: "Celebrate You",
      description:
        "New job, big milestone, or just feeling good? Capture it and own your story.",
    },
    {
      icon: "/assets/services/cameralovesection/arrow.svg",
      title: "Create Lasting Memories",
      description:
        "Imagine showing your grandkids how amazing you looked in your prime!",
    },
  ];

  return (
    <article className="flex gap-10 justify-center items-start text-black">
      <div className="w-[674px] max-md:max-w-full">
        <header className="w-full max-md:max-w-full">
          <h2 className="text-2xl font-extrabold max-md:max-w-full">
            Why Should the Camera Love You Too?
          </h2>
          <p className="mt-2.5 text-xl leading-8 max-md:max-w-full">
            Think photoshoots are only for models or influencers? Think again.
            Here's why stepping in front of the camera could be one of the best
            things you do for yourself:
          </p>
        </header>

        <section className="mt-9 w-full text-lg leading-8 max-md:max-w-full">
          {benefits.map((benefit, index) => (
            <React.Fragment key={benefit.title}>
              <BenefitPoint
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
              {index < benefits.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </section>
      </div>
    </article>
  );
};

export default CameraLoveSection;
