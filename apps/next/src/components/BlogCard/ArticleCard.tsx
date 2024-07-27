import React from "react";

type ArticleCardProps = {
  title: string;
  description: string;
  img: string;
  date: string;
};

const ArticleCard = ({ title, description, img, date }: ArticleCardProps) => {
  return (
    <div className="border-b border-slate-200 flex flex-row gap-2 justify-between mx-auto items-center pt-2 pb-2">
      <div className="flex flex-col gap-1">
        <h6 className="text-md font-semibold">{title}</h6>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xs">{date}</p>
      </div>
      <div>
        <img src={img} alt="articleimg" className="w-[200px] h-[100px]" />
      </div>
    </div>
  );
};

export default ArticleCard;
