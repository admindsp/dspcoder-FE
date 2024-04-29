import HomeCards from "@/components/HomeCards/HomeCards";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  const dynamicStrings = [
    "selected DSA Questions.",
    "Embedded System Questions.",
  ];
  return (
    <div className="bg-[#1e1e1e] text-white">
      <div className="px-4 py-4 ">
        <HomeCards />
      </div>
      <div className="w-full">Dashboard</div>
    </div>
  );
};

export default Home;
