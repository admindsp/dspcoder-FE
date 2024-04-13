import Link from "next/link";
import React from "react";
import CgProfile from "@dspcoder/ui/icons";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-[#1e1031] py-2 text-white px-4 flex gap-10">
      <Link href="/">DSPCoder</Link>
      <div className="flex justify-between w-full items-center">
        <Link href="/problem">Problems</Link>
        <div className="icons">
          <Link href={"/"}>
            <CgProfile className="scale-125" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
