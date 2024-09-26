import { BlogType } from "@/types/Blog";
import { timeAgo } from "@/utils/timeAgo";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { CiBookmarkCheck } from "react-icons/ci";

type BlogCardProps = {
  data: BlogType;
};

const BlogCard = ({ data }: BlogCardProps) => {
  return (
    <div className="w-full overflow-clip h-[120px] md:h-[165px] border-b gap-4 border-b-gray-400 border-opacity-50 px-2 py-2 grid grid-cols-[75fr_25fr] sm:grid-cols-[70fr_30fr] bg-gray-50 bg-opacity-50 rounded-md shadow-md">
      <div className="flex justify-between gap-1 flex-col">
        <div className="grid grid-flow-row gap-2">
          <p className="text-[#777777] font-semibold text-[14px]">
            {timeAgo(data.updated_at)}
          </p>
          <p className="font-bold text-sm sm:text-lg md:text-xl sm:line-clamp-2 capitalize">
            {data.title}
          </p>
          <p className="hidden md:line-clamp-1 lg:line-clamp-2 text-xs lg:text-sm  ">
            {data.abstract}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <AiOutlineLike />
            <p className="text-[14px] font-semibold">{data.user_like_count}</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="grid grid-flow-col gap-1">
              {data.tags.map((tag, idx) => {
                return (
                  <p
                    className="bg-[#F2F2F2] text-xs font-semibold px-2 py-0.5 text-center rounded-md"
                    key={idx}
                  >
                    {tag}
                  </p>
                );
              })}
            </div>
            <CiBookmarkCheck />
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zs5Noz8Xlz1aWOkwIZDKT1OHyD5wz31jvg&s"
          width={100}
          height={100}
          alt="image"
          className="aspect-video w-full h-[95px] sm:h-full object-cover rounded-md sm:max-w-[230px] sm:max-h-[148px]"
        />
      </div>
    </div>
  );
};

export default BlogCard;
