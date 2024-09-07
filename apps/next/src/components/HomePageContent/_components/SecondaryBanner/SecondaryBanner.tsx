import { SectionType } from "@/types/HomePage";
import { cn } from "@dspcoder/ui/lib/utils";
import React from "react";
import ContentBanner from "./ContentBanner";
import MediaBanner from "./MediaBanner";

type SecondaryBannerProps = {
  section: SectionType;
  direction: number;
};

const SecondaryBanner = ({ section, direction }: SecondaryBannerProps) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row justify-between items-center gap-10 text-white",
        direction === 1 ? "lg:flex-row-reverse" : ""
      )}
    >
      <div className="text-white">
        <p className="text-4xl lg:text-5xl w-full lg:w-[30rem] font-bold">
          {section.title}
        </p>
        <p className="w-full lg:w-[29rem] text-lg lg:text-xl mt-4 lg:mt-6 text-[#9ba3b4] font-[550]">
          {section.description}
        </p>
      </div>
      {section.media && <MediaBanner mediaData={section.media} />}
      {section.content && <ContentBanner contentData={section.content} />}
    </div>
  );
};

export default SecondaryBanner;
