"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import {
  difficultyOptions,
  listsOptions,
  statusOptions,
  tagsOptions,
} from "@/constants/ProblemsData";
import FilterSelect from "./FilterSelect";
import Link from "next/link";
import { cn } from "@dspcoder/ui/lib/utils";
import { Input } from "@dspcoder/ui/components/ui/input";
import { createQueryString } from "@/utils/createQueryString";

type ProblemsListFilterProps = {
  type?: string;
};

const ProblemsListFilter = ({ type }: ProblemsListFilterProps) => {
  const searchParams = useSearchParams();

  return (
    <div className="w-full">
      <div id="problem-types" className="pb-2 border-b border-white">
        <div className="w-full font-semibold text-center sm:text-left text-white flex justify-around text-sm md:text-base">
          <Link
            className={cn(!type && "text-red-600 transtion-all duration-300")}
            href={`/problems?${createQueryString(searchParams, "type", "")}`}
          >
            All Problems
          </Link>
          <Link
            className={cn(
              type === "dsa" && "text-red-500 transition-all duration-300",
            )}
            href={`/problems?${createQueryString(searchParams, "type", "dsa")}`}
          >
            Data Structures and Algorithms
          </Link>
          <Link
            className={cn(
              type === "embedded" && "text-red-500 transition-all duration-300",
            )}
            href={`/problems?${createQueryString(searchParams, "type", "embedded")}`}
          >
            Embedded Systems
          </Link>
        </div>
      </div>

      <div
        id="problem-filters"
        className="grid grid-cols-2 sm:grid-flow-col w-full sm:w-fit gap-3 py-2"
      >
        <Input
          name=""
          type="text"
          id="problem-search"
          className="bg-grayish placeholder:text-gray-400 text-white border-none outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 max-w-[30rem]"
          placeholder="Search question"
        />
        <FilterSelect placeholder="Difficulty" options={difficultyOptions} />
        <FilterSelect placeholder="Status" options={statusOptions} />
        <FilterSelect placeholder="Lists" options={listsOptions} />
      </div>

      <div
        id="problem-tags"
        className="w-full flex flex-wrap items-center gap-3 pt-4"
      >
        {tagsOptions.map((tag, index) => (
          <Link
            href={`/problems?${createQueryString(searchParams, "tag", tag.value)}`}
            key={index}
            className={cn(
              " hover:bg-white hover:text-black transition-all duration-300 text-white rounded-lg pt-1 pb-1 px-4 flex align-middle cursor-pointer",
              searchParams.get("tag")?.toString() === tag.value
                ? "bg-white !text-black scale-95"
                : "bg-grayish",
            )}
          >
            <span>{tag.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProblemsListFilter;
