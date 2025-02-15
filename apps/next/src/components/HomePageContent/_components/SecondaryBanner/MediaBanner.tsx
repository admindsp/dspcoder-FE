import React from "react";
import Image from "next/image";

type MediaBannerProps = {
  mediaData: {
    path: string;
    type: string;
    alt_text: string;
  }[];
};

const MediaBanner = ({ mediaData }: MediaBannerProps) => {
  return (
    <div className="w-full flex justify-center lg:block">
      {mediaData.map((media, idx) => {
        return (
          <div key={idx} className="w-[80%] h-auto">
            <Image
              src={media.path}
              alt={media.alt_text}
              width={500}
              height={300}
              className="object-cover h-full"
            />
          </div>
        );
      })}
    </div>
  );
};

export default MediaBanner;
