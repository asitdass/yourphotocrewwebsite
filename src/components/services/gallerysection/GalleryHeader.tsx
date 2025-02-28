import React from "react";

export const GalleryHeader: React.FC = () => {
  return (
    <section className="flex flex-col text-center max-md:max-w-full">
      <h2 className="text-2xl font-extrabold text-black max-md:max-w-full">
        Get a glimpse of our work
      </h2>
      <p className="mt-2.5 text-xl leading-8 text-black max-md:max-w-full">
        Think photoshoots are only for models or influencers? Think again.
        Here's why stepping in front of the camera could be one of the best
        things you do for yourself:
      </p>
    </section>
  );
};
