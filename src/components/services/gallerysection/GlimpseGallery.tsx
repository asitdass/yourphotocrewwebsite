import React from "react";

export const GlimpseGallery: React.FC = () => {
  return (
    <section className="mx-0 md:mx-10 lg:mx-20 glimpse-gallery py-4 px-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-[#2c3e50] mb-4">
          Get a Glimpse of Our Work
        </h2>
        <p className="text-xl text-[#34495e] max-w-2xl mx-auto mb-12">
          Think photoshoots are only for models or influencers? Think again.
          Here's why stepping in front of the camera could be one of the best
          things you do for yourself.
        </p>

        {/* Looping Animated Grid */}
        <div className="gallery-grid-container relative overflow-hidden h-[600px] rounded-2xl shadow-lg">
          <div className="gallery-grid animate-scroll">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="gallery-image"
                style={{
                  backgroundImage: `url(assets/services/gallerysection/imagegrid/image-${(index % 6) + 1}.jpg)`,
                }}
              />
            ))}
          </div>

          {/* Overlay and Button */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <a href="/gallery">
            <button
              className="gallery-button bg-white text-[#2c3e50] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#f8f2eb] hover:text-black transition-all duration-300"
              onClick={() => {
                // Add functionality to open the full gallery page
                console.log("Open Full Gallery");
              }}
            >
              View Full Gallery
            </button>
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlimpseGallery;