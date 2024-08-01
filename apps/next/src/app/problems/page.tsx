import React from "react";
import FilterMenu from "./_components/FilterMenu/FilterMenu";
import ProblemsList from "./_components/ProblemsList/ProblemsList";

type Props = {};

const Problems = (props: Props) => {
  return (
    <div className="bg-darkish h-screen text-white md:px-20 md:py-10">
      <FilterMenu />
      <ProblemsList />
    </div>
  );
};

export default Problems;
