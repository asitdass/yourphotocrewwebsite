import React from 'react';

const PhotoGrid = () => {
    return (
        <div className="self-stretch min-w-60 w-[435px] my-auto rounded-[150px] max-md:w-full max-md:rounded-2xl">
            {/* First Row - Stack vertically on mobile */}
            <div className="max-md:max-w-full max-md:flex max-md:flex-col">
                <div className="gap-5 flex max-md:flex-col max-md:gap-3 max-md:items-stretch">
                    <div className="w-3/5 max-md:w-full max-md:ml-0">
                        <img
                            loading="lazy"
                            srcSet="assets/gallery/male/male-1.jpg"
                            className="aspect-[1.42] object-cover w-full grow rounded-[150px] hover:scale-105 transition-transform duration-500 ease-in-out animate-float max-md:aspect-square max-md:rounded-xl"
                            alt="Photography portfolio sample 1"
                        />
                    </div>
                    <div className="w-2/5 ml-5 max-md:w-full max-md:ml-0 max-md:mt-3">
                        <img
                            loading="lazy"
                            srcSet="assets/gallery/couple/couple-1.jpg"
                            className="aspect-[0.94] object-cover w-[172px] shrink-0 max-w-full grow rounded-[150px] hover:scale-105 transition-transform duration-500 ease-in-out animate-float-delay max-md:w-full max-md:aspect-square max-md:rounded-xl"
                            alt="Photography portfolio sample 2"
                        />
                    </div>
                </div>
            </div>

            {/* Second Row - Stack vertically on mobile */}
            <div className="max-md:max-w-full mt-5 max-md:mt-3 max-md:flex max-md:flex-col">
                <div className="gap-5 flex max-md:flex-col max-md:gap-3 max-md:items-stretch">
                    <div className="w-2/5 max-md:w-full max-md:ml-0">
                        <img
                            loading="lazy"
                            srcSet="assets/services/hero/image-10.jpg"
                            className="aspect-[1] object-cover w-[173px] shrink-0 max-w-full rounded-[150px] hover:scale-105 transition-transform duration-500 ease-in-out animate-float-delay-2 max-md:w-full max-md:aspect-square max-md:rounded-xl"
                            alt="Photography portfolio sample 3"
                        />
                    </div>
                    <div className="w-3/5 ml-5 max-md:w-full max-md:ml-0 max-md:mt-3">
                        <img
                            loading="lazy"
                            srcSet="assets/services/hero/image-11.jpg"
                            className="aspect-[1.52] object-cover w-full grow rounded-[150px] hover:scale-105 transition-transform duration-500 ease-in-out animate-float max-md:w-full max-md:aspect-square max-md:rounded-xl"
                            alt="Photography portfolio sample 4"
                        />
                    </div>
                </div>
            </div>

            {/* Third Row - Stack vertically on mobile */}
            <div className="max-md:max-w-full mt-5 max-md:mt-3 max-md:flex max-md:flex-col">
                <div className="gap-5 flex max-md:flex-col max-md:gap-3 max-md:items-stretch">
                    <div className="w-2/5 max-md:w-full max-md:ml-0">
                        <img
                            loading="lazy"
                            srcSet="assets/services/hero/image-12.jpg"
                            className="aspect-[1] object-cover w-[173px] shrink-0 max-w-full rounded-[150px] hover:scale-105 transition-transform duration-500 ease-in-out animate-float max-md:w-full max-md:aspect-square max-md:rounded-xl"
                            alt="Photography portfolio sample 5"
                        />
                    </div>
                    <div className="w-[30%] ml-5 max-md:w-full max-md:ml-0 max-md:mt-3">
                        <img
                            loading="lazy"
                            srcSet="assets/services/hero/image-13.jpg"
                            className="aspect-[0.76] object-cover w-[131px] shrink-0 max-w-full grow rounded-[150px] hover:scale-105 transition-transform duration-500 ease-in-out animate-float-delay max-md:w-full max-md:aspect-square max-md:rounded-xl"
                            alt="Photography portfolio sample 6"
                        />
                    </div>
                    <div className="w-[30%] ml-5 max-md:w-full max-md:ml-0 max-md:mt-3">
                        <img
                            loading="lazy"
                            srcSet="assets/services/hero/image-14.jpg"
                            className="aspect-[0.76] object-cover w-[131px] shrink-0 max-w-full grow rounded-[150px] hover:scale-105 transition-transform duration-500 ease-in-out animate-float-delay-2 max-md:w-full max-md:aspect-square max-md:rounded-xl"
                            alt="Photography portfolio sample 7"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoGrid;