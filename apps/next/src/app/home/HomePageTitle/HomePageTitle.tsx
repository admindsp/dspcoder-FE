"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import homepagelottie from "../../../../public/Lotties/HomePageTitleLottie.json";

type Props = {};

const HomePageTitle = (props: Props) => {
  const dynamicStrings: string[] = [
    "Embedded System Questions.",
    "Selected DSA Questions.",
  ];
  return (
    <div className="h-80 flex justify-between">
      <div className="font-bold text-xl flex justify-center items-center">
        <p className="w-1/2 text-3xl">
          Elevate Your Embedded Programming: Dive into Engaging Problems,
          Elevate Your Skills!
        </p>
      </div>
      <div className="font-bold w-3/4 text-xl flex justify-center items-center">
        {/* <Lottie options={{ animationData: { homepagelottie } }} /> */}
        <div className="text-center">
          Practice{" "}
          <span className="text-yellow-600">
            <Typewriter words={dynamicStrings} loop={false} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePageTitle;
