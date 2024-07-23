"use client";

import Lottie from "lottie-react";
import React from "react";
import homepageRobot from "@/assets/Lotties/HomepageRobot.json";
import { cn } from "@dspcoder/ui/lib/utils";

type BannerCardProps = {
  title: string;
  description: string;
  className?: string;
  img?: string;
};

const BannerCard = ({
  title,
  description,
  img,
  className,
}: BannerCardProps) => {
  return (
    <div
      className={cn(
        "min-h-80 flex flex-col justify-between items-center md:flex-row-reverse",
        className
      )}
    >
      <div className=" w-full md:w-3/4">
        <div className="text-xl flex flex-col justify-center w-3/4 mx-auto mt-12">
          <span className="text-4xl font-bold">{title}</span>
          <span className="mt-12 font-semibold text-gray-400 w-full md:w-3/4">
            {description}
          </span>
        </div>
      </div>
      {!img ? (
        <div className="font-bold w-full md:w-2/4 text-xl flex flex-col justify-center items-center">
          <Lottie className="w-[525px]" animationData={homepageRobot} />
        </div>
      ) : (
        <div className="font-bold w-full md:w-2/4 text-xl flex flex-col justify-center items-center">
          <img src={img} alt="img" className="object-contain max-w-[350px]" />
        </div>
      )}
    </div>
  );
};

export default BannerCard;
