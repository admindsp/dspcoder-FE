import { HomePageFeatures } from "@/constants/BannerData";
import React from "react";
import FeatureCard from "./FeatureCard";

type Props = {};

const HomePageFeatureContent = (props: Props) => {
  return (
    <div className="max-w-[900px] mx-auto py-10 text-center flex flex-col gap-7">
      <span className="text-4xl font-bold">Why DSPCoder?</span>
      <div className="grid grid-cols-1  gap-5 justify-between sm:grid-cols-3">
        {HomePageFeatures.map((feature) => (
          <FeatureCard feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default HomePageFeatureContent;
