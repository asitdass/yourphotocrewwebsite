import React from 'react'
import PhotoGrid from './PhotoGrid';
import SocialLinks from './SocialLinks';

const ScheduledShoot = () => {
    return (
        <section className="bg-[rgba(248,242,235,1)] overflow-hidden pr-[60px] pt-14 rounded-[30px] max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[29%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/2043852398bc4a4cbacad686c8d3bbe5/8a3b4a97e41592056c6d84be3c779f22f76d98ae9f251d532c909f5bf2079e19?placeholderIfAbsent=true"
                className="aspect-[3.23] object-contain w-full z-10 mr-[-437px] grow mt-[434px] rounded-[200px] max-md:max-w-full max-md:mt-10"
                alt="Decorative background element"
              />
            </div>
            <div className="w-[71%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full max-md:mt-10">
                <div className="self-stretch flex min-w-60 flex-col items-stretch w-[619px] my-auto max-md:max-w-full">
                  <div className="max-w-full w-[619px] text-black">
                    <h1 className="text-5xl font-bold leading-none max-md:max-w-full max-md:text-[40px]">
                      Scheduled Shoot Services
                    </h1>
                    <p className="text-xl font-normal leading-[30px] mt-[22px] max-md:max-w-full">
                      We're here to flip the script on the typical "photoshoot
                      stigma." Whether it's for work, play, or just because—our
                      mission is to make you feel amazing in front of the camera.
                      Let's create something that's uniquely you.
                    </p>
                  </div>
                  <SocialLinks />
                </div>
                <PhotoGrid />
              </div>
            </div>
          </div>
        </section>
      );
}

export default ScheduledShoot