import React from "react";

type Props = {};

const NavbarSkeleton = (props: Props) => {
  return (
    <div className="bg-black text-white py-2 px-4 flex gap-6 overflow-hidden min-h-10 max-h-12 sticky"></div>
  );
};

export default NavbarSkeleton;
