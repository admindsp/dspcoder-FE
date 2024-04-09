import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-[#1d241d] py-2 text-white px-2 flex gap-10">
      <Link href="/">DSPCoder</Link>
      <div className="flex justify-between w-full">
        <Link href="/problem">Problems</Link>
        <div>icons</div>
      </div>
    </div>
  );
};

export default Navbar;
