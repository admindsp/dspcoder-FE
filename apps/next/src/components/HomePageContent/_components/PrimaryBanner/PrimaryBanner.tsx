import Image from "next/image";
import React from "react";

import { PrimaryBannerType } from "@/types/HomePage";

type PrimaryBannerProp = {
  data: PrimaryBannerType;
};

const PrimaryBanner = ({ data }: PrimaryBannerProp) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-12 border-b py-2 lg:py-0 lg:border-none">
      <div className="flex flex-col items-start space-y-4 md:space-y-6 lg:w-1/2">
        <div className="md:w-full">
          <span className="text-white text-4xl md:text-6xl font-semibold block pb-2">
            {data.title}
          </span>
        </div>
        <div className="lg:w-full lg:pr-20">
          <span className="text-[#9ba3b4] text-lg lg:text-xl font-semibold">
            {data.description}
          </span>
        </div>
        <button className="text-black bg-white py-1 px-4 rounded-sm mt-4 md:mt-7 font-bold">
          Try Now
        </button>
      </div>
      <div className="flex justify-center lg:justify-end lg:w-1/2 mt-8 lg:mt-0">
        {data.media.map((mediaObj, idx) => {
          return (
            <div
              key={idx}
              className="w-full object-contain flex align-middle justify-center max-w-xs lg:max-w-[36rem] h-64 lg:h-[30rem]"
            >
              <Image
                src={mediaObj.path}
                alt={mediaObj.alt_text || "Banner Image"}
                layout="responsive"
                width={700}
                height={400}
                className="w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrimaryBanner;
