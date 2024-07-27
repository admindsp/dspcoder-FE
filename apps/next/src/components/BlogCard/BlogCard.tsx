import React from "react";

type BlogCardProps = {
  title: string;
  description: string;
  img: string;
};

const BlogCard = ({ title, description, img }: BlogCardProps) => {
  return (
    <div className="border-b border-slate-200 shadow-sm rounded-md bg-slate-50 flex flex-row gap-2 justify-between mx-auto items-center pt-2 pb-2">
      <div className="titleanddes flex flex-col gap-1">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="image mx-auto">
        <img src={img} alt="blogimg" className="w-[200px] h-[100px]" />
      </div>
    </div>
  );
};

export default BlogCard;
