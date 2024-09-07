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
          <div key={idx} className="flex gap-4 justify-between w-[80%] mb-4">
            <p className="whitespace-nowrap w-max font-semibold">
              {content.title}
            </p>
            <div className="max-w-[400px] flex items-center h-[63px] align-middle overflow-hidden bg-[#2B2B2B]">
              <p className="line-clamp-2 px-4 text-ellipsis overflow-hidden">
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
