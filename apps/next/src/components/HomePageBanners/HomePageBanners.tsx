import React from "react";
import BannerCard from "./BannerCard";
import { PrimaryBannerData, SecondaryBannerData } from "@/constants/BannerData";

type Props = {};

const HomePageBanners = (props: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <BannerCard
        title={PrimaryBannerData.title}
        description={PrimaryBannerData.description}
      />
      <BannerCard
        title={SecondaryBannerData.title}
        description={SecondaryBannerData.description}
        img="https://as1.ftcdn.net/v2/jpg/01/64/53/30/1000_F_164533043_VSZCEPwHV8HtZUUqw5ZpBUBjplUffww0.jpg"
        order="last"
      />
    </div>
  );
};

export default HomePageBanners;
