import React from "react";
import HomePageTitle from "./HomePageTitle/HomePageTitle";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="h-screen p-4">
      <div className="">
        <HomePageTitle />
      </div>
    </div>
  );
};

export default Home;
