import React from "react";
import { homePageData } from "@/constants/HomePageData";
import PrimaryBanner from "./_components/PrimaryBanner/PrimaryBanner";
import SecondaryBanner from "./_components/SecondaryBanner/SecondaryBanner";
import CompaniesSection from "./_components/CompaniesSection/CompaniesSection";
type Props = {};

const HomePageContent = (props: Props) => {
  return (
    <div className="container flex flex-col lg:gap-16">
      <PrimaryBanner data={homePageData.primary} />
      {homePageData.secondary.map((section, idx) => {
        return (
          <SecondaryBanner key={idx} section={section} direction={idx % 2} />
        );
      })}
      <CompaniesSection CompanyBadges={homePageData.footer_badges} />
    </div>
  );
};

export default HomePageContent;
