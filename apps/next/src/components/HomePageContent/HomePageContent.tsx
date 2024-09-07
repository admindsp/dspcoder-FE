import React from "react";
import HomeBanner from "../PrimaryBanner/PrimaryBanner";
import PrepareCodingInterview from "./_components/PrepareCodingInterview/PrepareCodingInterview";
import { homePageData } from "@/constants/HomePageData";
type Props = {};

const HomePageContent = (props: Props) => {
  return (
    <div className="container">
      <HomeBanner data={homePageData.primary} />
      {/* <PrepareCodingInterview /> */}
      {/* <AiInterviewBasedSection/> 
      <FirmwareSection/> 
      <CompaniesSection/> */}
    </div>
  );
};

export default HomePageContent;
