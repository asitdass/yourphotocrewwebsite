import React from 'react'

const PhotoGrid = () => {
    return (
        <div className="self-stretch min-w-60 w-[435px] my-auto rounded-[150px] max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-3/5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="assets/services/hero/image-8.jpg"
                  className="aspect-[1.42] object-contain w-full grow rounded-[150px]"
                  alt="Photography portfolio sample 1"
                />
              </div>
              <div className="w-2/5 ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="assets/services/hero/image-9.jpg"
                  className="aspect-[0.94] object-contain w-[172px] shrink-0 max-w-full grow rounded-[150px]"
                  alt="Photography portfolio sample 2"
                />
              </div>
            </div>
          </div>
          <div className="max-md:max-w-full mt-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-2/5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="assets/services/hero/image-10.jpg"
                  className="aspect-[1] object-contain w-[173px] shrink-0 max-w-full rounded-[150px]"
                  alt="Photography portfolio sample 3"
                />
              </div>
              <div className="w-3/5 ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="assets/services/hero/image-11.jpg"
                  className="aspect-[1.52] object-contain w-full grow rounded-[150px]"
                  alt="Photography portfolio sample 4"
                />
              </div>
            </div>
          </div>
          <div className="max-md:max-w-full mt-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-2/5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="assets/services/hero/image-12.jpg"
                  className="aspect-[1] object-contain w-[173px] shrink-0 max-w-full rounded-[150px]"
                  alt="Photography portfolio sample 5"
                />
              </div>
              <div className="w-[30%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="assets/services/hero/image-13.jpg"
                  className="aspect-[0.76] object-contain w-[131px] shrink-0 max-w-full grow rounded-[150px]"
                  alt="Photography portfolio sample 6"
                />
              </div>
              <div className="w-[30%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="assets/services/hero/image-14.jpg"
                  className="aspect-[0.76] object-contain w-[131px] shrink-0 max-w-full grow rounded-[150px]"
                  alt="Photography portfolio sample 7"
                />
              </div>
            </div>
          </div>
        </div>
      );
}

export default PhotoGrid