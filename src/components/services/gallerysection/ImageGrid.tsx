import React from "react";
import { GalleryImage } from "./GalleryImage";
import { GalleryHeader } from "./GalleryHeader";

export const ImageGrid: React.FC = () => {
  return (
    <section className="flex flex-col">
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[18%] max-md:ml-0 max-md:w-full">
            <GalleryImage
              src="assets/services/gallerysection/imagegrid/image.jpg"
              className="shrink-0 mt-8 max-w-full aspect-[0.77] w-[235px] max-md:mt-10"
            />
          </div>
          <div className="ml-5 w-[61%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-[36%] max-md:ml-0 max-md:w-full">
                  <GalleryImage
                    src="assets/services/gallerysection/imagegrid/image-6.jpg"
                    className="mt-56 w-full aspect-[0.75] max-md:mt-10"
                  />
                </div>
                <div className="ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-center max-md:max-w-full">
                    <GalleryImage
                      src="assets/services/gallerysection/imagegrid/image-2.jpg"
                      className="self-end max-w-full aspect-[0.69] w-[215px]"
                    />
                    <div className="mt-48 max-w-full w-[465px] max-md:mt-10">
                      <GalleryHeader />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 w-1/5 max-md:ml-0 max-md:w-full">
            <GalleryImage
              src="assets/services/gallerysection/imagegrid/image-4.jpg"
              className="shrink-0 self-stretch my-auto max-w-full aspect-[0.69] w-[258px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="self-center ml-2.5 w-full max-w-[1210px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[30%] max-md:ml-0 max-md:w-full">
            <GalleryImage
              src="assets/services/gallerysection/imagegrid/image-3.jpg"
              className="self-stretch my-auto w-full aspect-[0.75] max-md:mt-10"
            />
          </div>
          <div className="ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <GalleryImage
              src="assets/services/gallerysection/imagegrid/image-5.jpg"
              className="grow mt-40 w-full aspect-[1.14] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="ml-5 w-[28%] max-md:ml-0 max-md:w-full">
            <GalleryImage
              src="assets/services/gallerysection/imagegrid/image-1.jpg"
              className="shrink-0 max-w-full aspect-[0.78] w-[287px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
