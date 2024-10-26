"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
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
import { IoIosCloseCircle } from "react-icons/io";
import { createQueryString } from "@/utils/createQueryString";
import { Button } from "@dspcoder/ui/components/ui/button";

type ProblemsListFilterProps = {
  type?: string;
};

const ProblemsListFilter = ({ type }: ProblemsListFilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const updatedQuery = createQueryString(
        searchParams,
        "title",
        debouncedSearchTerm
      );
      router.push(`/problems?${updatedQuery}`, { scroll: false });
    }
  }, [debouncedSearchTerm, searchParams, router]);

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleRemoveParam = (key: string) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.delete(key);
    const queryString = updatedParams.toString();
    router.push(`/problems?${queryString}`, { scroll: false });
  };
  const filteredParams = Array.from(searchParams.entries()).filter(
    ([key]) => key !== "type" && key !== "title"
  );

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
              type === "dsa" && "text-red-500 transition-all duration-300"
            )}
            href={`/problems?${createQueryString(searchParams, "type", "dsa")}`}
          >
            Data Structures and Algorithms
          </Link>
          <Link
            className={cn(
              type === "embedded" && "text-red-500 transition-all duration-300"
            )}
            href={`/problems?${createQueryString(searchParams, "type", "embedded")}`}
          >
            Embedded Systems
          </Link>
        </div>
      </div>

      <div
        id="problem-filters"
        className="flex flex-col lg:flex-row gap-3 py-2"
      >
        <Input
          onChange={(e) => handleSearch(e)}
          name=""
          type="text"
          id="problem-search"
          className="bg-grayish max-h-[32px] lg:max-w-[20rem] placeholder:text-gray-400 text-white border-none outline-none focus:outline-none focus:ring-0 focus:ring-offset-0"
          placeholder="Search a question..."
        />
        <div className="grid grid-cols-2 lg:grid-flow-col w-full lg:w-fit gap-2 ">
          <FilterSelect placeholder="Difficulty" options={difficultyOptions} />
          <FilterSelect placeholder="Status" options={statusOptions} />
          <FilterSelect placeholder="Lists" options={listsOptions} />
          <FilterSelect placeholder="Tags" options={tagsOptions} />
        </div>
      </div>

      <div
        id="problem-tags"
        className="w-full flex flex-wrap py-2 items-center gap-3 "
      >
        {filteredParams.map(([key, value], index) => (
          <div
            key={index}
            className={cn(
              "bg-grayish text-grayish_text text-sm font-semibold rounded-lg py-1 px-2 flex items-center justify-between gap-3"
            )}
          >
            <span>{value}</span>
            <Button
              className="bg-transparent hover:bg-transparent h-fit w-fit p-0 text-white"
              onClick={() => handleRemoveParam(key)}
            >
              <IoIosCloseCircle className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemsListFilter;
