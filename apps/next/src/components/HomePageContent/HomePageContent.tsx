import React from "react";
import PrepareCodingInterview from "./_components/PrepareCodingInterview/PrepareCodingInterview";
import { homePageData } from "@/constants/HomePageData";
import PrimaryBanner from "./_components/PrimaryBanner/PrimaryBanner";
import SecondaryBanner from "./_components/SecondaryBanner/SecondaryBanner";
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

      {/* <AiInterviewBasedSection/> 
      <FirmwareSection/> 
      <CompaniesSection/> */}
    </div>
  );
};

export default HomePageContent;
