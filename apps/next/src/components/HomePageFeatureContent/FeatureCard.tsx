import React from "react";

type FeatureProps = {
  feature: {
    id: number;
    title: string;
    img?: string;
  };
};

const FeatureCard = ({ feature }: FeatureProps) => {
  return (
    <div className="mx-auto max-w-[450px] min-w-[150px] w-full h-auto aspect-video bg-gray-500 rounded-lg opacity-30">
      {feature.img}
    </div>
  );
};

export default FeatureCard;
