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

  return (
    <div className="bg-darkish h-screen md:px-20 md:py-10">
      {/* <FilterMenu /> */}
      <ProblemsSection />
    </div>
  );
};

export default Problems;
