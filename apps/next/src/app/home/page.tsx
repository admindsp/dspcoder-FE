import HomeCards from "@/components/HomeCards/HomeCards";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="">
      <div className="border-b-2 border-spacing-2 border-gray-200 px-4 py-4 ">
        <HomeCards />
      </div>
      <div className="w-full">Dashboard test</div>
    </div>
  );
};

export default Home;
