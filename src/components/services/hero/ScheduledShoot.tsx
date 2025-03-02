import React from 'react';
import PhotoGrid from './PhotoGrid';
import SocialLinks from './SocialLinks';

const ScheduledShoot = () => {
    return (
        <section className="m-16 p-16 bg-[rgba(248,242,235,1)] overflow-hidden px-[60px] pt-14 rounded-[30px] max-md:px-5">
            <div className="flex flex-col md:flex-row gap-10 max-md:items-stretch">
                {/* Left Side Content */}
                <div className="flex flex-col w-full md:w-[60%] max-md:order-2">
                    <div className="text-black">
                        <h1 className="text-5xl font-bold leading-none max-md:text-[40px]">
                            Scheduled Shoot Services
                        </h1>
                        <p className="text-xl font-normal leading-[30px] mt-[22px]">
                            We're here to flip the script on the typical "photoshoot
                            stigma." Whether it's for work, play, or just because—our
                            mission is to make you feel amazing in front of the camera.
                            Let's create something that's uniquely you.
                        </p>
                    </div>
                    <div className="mt-10">
                        <SocialLinks />
                    </div>
                </div>

                {/* Right Side PhotoGrid */}
                <div className="w-full md:w-[40%] max-md:order-1">
                    <PhotoGrid />
                </div>
            </div>
        </section>
    );
}

export default ScheduledShoot;