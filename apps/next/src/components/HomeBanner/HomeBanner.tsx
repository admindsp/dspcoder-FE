import Image from "next/image";
import React from "react";
import bannerImage from '@/assets/board.png'

type props = {};

const HomeBanner = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between mt-12 md:mt-24 px-4 md:px-12">
            {/* div for the text info of the banner */}
            <div className="flex flex-col items-start space-y-4 md:space-y-6 md:w-1/2">
                <div className="md:w-full">
                    <div>
                        <span className="text-white text-4xl md:text-6xl font-semibold block pb-2">
                            Learning
                        </span>
                        <span className="text-white text-4xl md:text-6xl font-semibold block pb-2">
                            Embedded
                        </span>
                        <span className="text-white text-4xl md:text-6xl font-semibold block pb-2">
                            Systems.
                        </span>
                        <span className="text-white text-4xl md:text-6xl font-semibold block">
                            Redefined.
                        </span>    
                    </div>
                </div>
                <div className="md:w-full md:pr-20">
                    <span className="text-[#9ba3b4] text-lg md:text-xl font-semibold">
                        All-in-one platform for mastering embedded systems, prepare for
                        technical interviews, gain hands-on experience with a variety of
                        MCUs.
                    </span>
                </div>
                <button className="text-black bg-white py-1 px-4 rounded-sm mt-4 md:mt-7 font-bold">
                    Try Now
                </button>
            </div>
            <div className="flex justify-center md:justify-end md:w-1/2 mt-8 md:mt-0">
                {/* Div for the image */}
                <div className="w-full flex align-middle justify-center max-w-xs md:max-w-[36rem] h-64 md:h-[30rem]">
                    <Image src={bannerImage} alt="Banner Image" />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
