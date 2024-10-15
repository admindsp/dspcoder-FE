"use client";
import React, { useEffect } from "react";
import FilterMenu from "./_components/FilterMenu/FilterMenu";
import ProblemsSection from "./_components/ProblemsSection/ProblemsSection";
import axios from "axios";

type Props = {};

const Problems = (props: Props) => {
  const fetchProblems = async () => {
    try {
      const resp = await axios.get("http://3.84.60.235:8000/api/problems");
      console.log("RESPONSE", resp);
      alert("FETCHED");
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    fetchProblems(); // Invoking the function
  }, []);

  const [isDSA, setisDSA] = React.useState(true);
  const ChangeisDSA = (value:boolean) => { setisDSA(value); };

  return (
    <div className="bg-darkish h-screen md:px-20 md:py-10">
      {/* <FilterMenu /> */}
      <div className="w-full text-gray-400 flex justify-around text-xl">
        <div className="pb-4 cursor-pointer" onClick={() => ChangeisDSA(true)}>
          <span>Data Structures & Algorithms</span>
          {isDSA ? <hr className="border-red-700 mt-2 border-[1px] "/> : null}
        </div>
        <div className="pb-4 cursor-pointer" onClick={() => ChangeisDSA(false)}>
          <span>Embedded Systems</span>
          {isDSA ? null : <hr className="border-red-700 mt-2 border-[1px]" />}
        </div>
      </div>
      <hr className="pb-4"/>
      <ProblemsSection />
    </div>
  );
};

export default Problems;
