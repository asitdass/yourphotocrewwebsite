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
    <article className="m-16 flex flex-col md:flex-row gap-10 justify-center items-center text-black p-10 rounded-[30px]">
      {/* Left Side: Reel Video */}
      <div className="w-full md:w-[40%] flex justify-center items-center camera-love-animate-fade-in-left">
        <div className="relative w-full max-w-[400px] h-[600px] rounded-[30px] overflow-hidden shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/assets/services/cameralovesection/reel-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-[50%] max-w-[674px] camera-love-animate-fade-in-right">
        <header className="w-full">
          <h2 className="text-4xl font-extrabold mb-5 text-[#2c3e50]">
            Why Should the Camera Love You Too?
          </h2>
          <p className="text-xl leading-8 text-[#34495e]">
            Think photoshoots are only for models or influencers? Think again.
            Here's why stepping in front of the camera could be one of the best
            things you do for yourself:
          </p>
        </header>

        <section className="mt-9 w-full text-lg leading-8">
          {benefits.map((benefit, index) => (
            <React.Fragment key={benefit.title}>
              <BenefitPoint
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                className="camera-love-animate-pop-in"
              />
              {index < benefits.length - 1 && (
                <Divider className="camera-love-animate-fade-in" />
              )}
            </React.Fragment>
          ))}
        </section>
      </div>
    </article>
  );
};

export default CameraLoveSection;