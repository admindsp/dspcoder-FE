import { difficultyOptions, statusOptions } from "@/constants/ProblemsData";
import React from "react";
import FilterSelect from "./FilterSelect";

type Props = {};

const ProblemsListFilter = (props: Props) => {
  return (
    <div className="w-full flex items-center gap-3">
      <FilterSelect placeholder="Difficulty" options={difficultyOptions} />
      <FilterSelect placeholder="Status" options={statusOptions} />
    </div>
  );
};

export default ProblemsListFilter;
