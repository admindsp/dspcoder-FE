"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import homepageRobot from "../../../../public/Lotties/HomepageRobot.json";

type Props = {};

const HomePageTitle = (props: Props) => {
  const dynamicStrings: string[] = [
    "Embedded System Questions.",
    "Selected DSA Questions.",
  ];
  return (
    <div className="min-h-80 flex flex-col md:flex-row  justify-between items-center">
      <div className=" w-full md:w-3/4">
        <div className="font-bold text-xl flex flex-col justify-center w-3/4 mx-auto mt-12">
          <p className="text-4xl">Coding platform for</p>
          <p className="text-5xl w-full">Embedded Systems Interviews</p>
          <p className="mt-12 text-gray-400 w-full md:w-3/4">
            Practice company wise and topic wise questions along with firmware
            design, RTOS, Drivers and much more
          </p>
        </div>
      </div>
      <div className="font-bold w-full md:w-2/4 text-xl flex flex-col justify-center items-center">
        <Lottie className="w-[525px]" animationData={homepageRobot} />
        <div className="">
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
