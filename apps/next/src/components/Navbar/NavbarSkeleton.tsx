import React from "react";
import Skeleton from "../Skeleton/Skeleton";

const NavbarSkeleton = () => {
  return (
    <Skeleton
      theme="dark"
      width="500px"
      height="25px"
      className="w-[178px] rounded-md h-[30px] "
    />
  );
};

export default NavbarSkeleton;
