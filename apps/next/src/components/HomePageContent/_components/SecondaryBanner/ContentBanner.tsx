import React from "react";

type ContentBannerProps = {
  contentData: {
    title: string;
    description: string;
  }[];
};

const ContentBanner = ({ contentData }: ContentBannerProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      {contentData.map((content, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col items-center lg:flex-row gap-4 justify-center lg:justify-between w-[80%] mb-4"
          >
            <p className="whitespace-nowrap w-full text-center lg:w-max font-semibold min-w-[237px]">
              {content.title}
            </p>
            <div className="w-full lg:max-w-[400px] flex items-center h-[63px] align-middle overflow-hidden border-[#2B2B2B] border bg-[#313131] ">
              <p className="line-clamp-2 w-full text-center lg:w-max px-4 text-ellipsis overflow-hidden">
                {content.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentBanner;
