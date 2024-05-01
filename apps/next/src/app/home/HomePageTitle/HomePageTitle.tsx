"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

type Props = {};

const HomePageTitle = (props: Props) => {
  const dynamicStrings: string[] = [
    "Embedded System Questions.",
    "Selected DSA Questions.",
  ];
  return (
    <div className="h-80 flex justify-between">
      <div className="font-bold text-xl">
        Practice <Typewriter words={dynamicStrings} loop={false} />
      </div>
      <div className="font-bold text-xl">
        Practice <Typewriter words={dynamicStrings} loop={false} />
      </div>
    </div>
  );
};

export default HomePageTitle;
