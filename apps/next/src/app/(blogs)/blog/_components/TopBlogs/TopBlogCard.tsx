import { BlogType } from "@/types/Blog";
import React from "react";

type TopBlogProps = {
  data: BlogType;
};

const TopBlogCard = ({ data }: TopBlogProps) => {
  return (
    <div className="w-[300px] lg:w-full h-[250px] lg:h-auto sm:min-w-[235px] bg-gray-100 rounded-md shadow-md hover:scale-95 transition-all duration-500 hover:shadow-lg">
      <div className="p-1.5 relative  min-h-[126px] max-h-[198px] overflow-clip">
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
      <div className="px-2 py-1">
        <p className="font-bold text-base capitalize">{data.title}</p>
      </div>
    </div>
  );
};

export default TopBlogCard;
