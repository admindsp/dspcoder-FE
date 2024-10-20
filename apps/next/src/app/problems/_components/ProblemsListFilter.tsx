import {
  difficultyOptions,
  listsOptions,
  statusOptions,
  tagsOptions,
} from "@/constants/ProblemsData";
import React from "react";
import FilterSelect from "./FilterSelect";

import Link from "next/link";
import { cn } from "@dspcoder/ui/lib/utils";
import { Input } from "@dspcoder/ui/components/ui/input";

type ProblemsListFilterProps = {
  type?: string;
};

const ProblemsListFilter = ({ type }: ProblemsListFilterProps) => {
  return (
    <div>
      <div id="problem-types" className="pb-2 border-b border-gray-400">
        <div className="w-full text-gray-400 flex justify-around text-xl">
          <Link className={cn(!type && "text-red-500")} href="/problems">
            All Problems
          </Link>
          <Link
            className={cn(type === "dsa" && "text-red-500")}
            href="/problems?type=dsa"
          >
            Data Structures and Algorithms
          </Link>
          <Link
            className={cn(type === "embedded" && "text-red-500")}
            href="/problems?type=embedded"
          >
            Embedded Systems
          </Link>
        </div>
      </div>

      <div id="problem-filters" className="w-full flex items-center gap-3 py-2">
        <Input
          name=""
          type="text"
          className="bg-grayish placeholder:text-gray-400 text-white border-none outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 w-[30rem]"
          placeholder="Search question"
        ></Input>
        <FilterSelect placeholder="Difficulty" options={difficultyOptions} />
        <FilterSelect placeholder="Status" options={statusOptions} />
        <FilterSelect placeholder="Lists" options={listsOptions} />
      </div>
      <div id="problem-tags" className="w-full flex items-center gap-3 pt-4">
        {tagsOptions.map((tag, index) => (
          <div
            key={index}
            className="bg-grayish rounded-lg pt-1 pb-1 px-4 flex align-middle cursor-pointer"
          >
            <span className="text-gray-400">{tag.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemsListFilter;
