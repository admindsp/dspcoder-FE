import React from "react";
import FilterMenu from "./_components/FilterMenu/FilterMenu";
import ProblemsSection from "./_components/ProblemsSection/ProblemsSection";

type Props = {};

const Problems = (props: Props) => {
  return (
    <div className="bg-darkish h-screen  md:px-20 md:py-10">
      {/* <FilterMenu /> */}
      <ProblemsSection />
    </div>
  );
};

export default Problems;
