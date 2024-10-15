import { difficultyOptions, listsOptions, statusOptions, tagsOptions } from "@/constants/ProblemsData";
import React from "react";
import FilterSelect from "./FilterSelect";

type Props = {};

const ProblemsListFilter = (props: Props) => {
  return (
    <>
      <div className="w-full flex items-center gap-3">
        <textarea name="" id="" className="resize-none h-10 bg-grayish rounded-lg p-2 text-white w-[30rem]" placeholder="Search question"></textarea>
        <FilterSelect placeholder="Difficulty" options={difficultyOptions} />
        <FilterSelect placeholder="Status" options={statusOptions} />
        <FilterSelect placeholder="Lists" options={listsOptions} />
      </div>
      <div className="w-full flex items-center gap-3 pt-4">
        {tagsOptions.map((tag, index) => (
          <div className="bg-grayish rounded-lg pt-1 pb-1 px-4 flex align-middle cursor-pointer">
            <span className="text-gray-400">{tag.label}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProblemsListFilter;
