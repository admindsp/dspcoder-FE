import { BlogType } from "@/types/Blog";
import { timeAgo } from "@/utils/timeAgo";
import React from "react";

type TopBlogProps = {
  data: BlogType;
};

const TopBlogCard = ({ data }: TopBlogProps) => {
  return (
    <div className="w-[300px] flex flex-col justify-between pb-2 lg:w-full h-[250px] lg:h-auto sm:min-w-[235px] bg-gray-100 rounded-md shadow-md hover:scale-95 transition-all duration-500 hover:shadow-lg">
      <div className="p-1.5 relative min-h-[126px] max-h-[198px] overflow-clip">
        <img
          src="https://viso.ai/wp-content/uploads/2024/01/Virtual-Reality-Headset.png"
          className="rounded-md min-h-[126px] max-h-[198px] object-cover"
        />
        <div className="absolute top-3 left-0 px-4 flex gap-1 overflow-auto">
          {data.tags.map((tag, idx) => {
            if (idx > 2) return null;
            if (idx === 2) {
              return (
                <p
                  className="bg-[#000000] bg-opacity-35 line-clamp-1 text-white text-xs font-semibold px-2 py-0.5 text-center rounded-md"
                  key={idx}
                >
                  More...
                </p>
              );
            }
            return (
              <p
                className="bg-[#000000] bg-opacity-35 line-clamp-1 text-white text-xs font-semibold px-2 py-0.5 text-center rounded-md"
                key={idx}
              >
                {tag}
              </p>
            );
          })}
        </div>
      </div>
      <div className="py-1 px-2 flex-grow">
        <p className="font-bold text-base capitalize line-clamp-2">
          {data.title}
        </p>
      </div>
      <div className="flex flex-col justify-between px-2">
        <div className="flex justify-between">
          <p className="text-xs text-[#777777] font-semibold capitalize">
            {data.username}
          </p>
          <p className="text-[#777777] text-xs font-semibold">
            {timeAgo(data.updated_at)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBlogCard;
