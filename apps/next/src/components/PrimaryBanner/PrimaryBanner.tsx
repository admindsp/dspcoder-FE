import Image from "next/image";
import React from "react";

import { PrimaryBannerType } from "@/types/HomePage";

type PrimaryBannerProp = {
  data: PrimaryBannerType;
};

const PrimaryBanner = ({ data }: PrimaryBannerProp) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-12">
      <div className="flex flex-col items-start space-y-4 md:space-y-6 md:w-1/2">
        <div className="md:w-full">
          <span className="text-white text-4xl md:text-6xl font-semibold block pb-2">
            {data.title}
          </span>
        </div>
        <div className="md:w-full md:pr-20">
          <span className="text-[#9ba3b4] text-lg md:text-xl font-semibold">
            {data.description}
          </span>
        </div>
        <button className="text-black bg-white py-1 px-4 rounded-sm mt-4 md:mt-7 font-bold">
          Try Now
        </button>
      </div>
      <div className="flex justify-center md:justify-end md:w-1/2 mt-8 md:mt-0">
        {data.media.map((mediaObj, idx) => {
          return (
            <div
              key={idx}
              className="w-full object-contain flex align-middle justify-center max-w-xs md:max-w-[36rem] h-64 md:h-[30rem]"
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
