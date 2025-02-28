import React from 'react'

const SocialLinks = () => {
    return (
        <div className="flex flex-col items-stretch justify-center mt-[46px] max-md:mt-10">
          <div className="text-black text-base font-medium">Find us on</div>
          <div className="flex gap-10 mt-3.5">
            <img
              loading="lazy"
              srcSet="assets/services/hero/image-15.jpg"
              className="aspect-[4.08] object-contain w-[163px] shrink-0"
              alt="Social media link 1"
            />
            <img
              loading="lazy"
              srcSet="assets/services/hero/image-16.jpg"
              className="aspect-[3.5] object-contain w-[140px] shrink-0"
              alt="Social media link 2"
            />
          </div>
        </div>
      );
}

export default SocialLinks