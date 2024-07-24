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
  order?: string;
};

const BannerCard = ({
  title,
  description,
  img,
  className,
  order = "first",
}: BannerCardProps) => {
  return (
    <div
      className={cn(
        "min-h-80 grid grid-cols-1 sm:grid-cols-2 justify-between items-center sm:w-[80%] mx-auto",
        className
      )}
    >
      <div className={`w-full  order-${order}`}>
        <div className="flex flex-col justify-center gap-4 w-3/4 mx-auto mt-12">
          <span className="text-2xl md:text-3xl font-bold text-center md:text-left">
            {title}
          </span>
          <span className="text-base text-center md:text-left md:text-lg font-semibold text-gray-400 w-full">
            {description}
          </span>
        </div>
      </div>
      <div className="font-bold w-full  text-xl flex flex-col justify-center items-center order-500">
        {!img ? (
          <Lottie
            className="max-w-[525px] mx-auto"
            animationData={homepageRobot}
          />
        ) : (
          <img
            src={img}
            alt="img"
            className="object-contain max-w-[350px] mx-auto"
          />
        )}
      </div>
    </div>
  );
};

export default BannerCard;
