"use client";
import Link from "next/link";
import React from "react";

import DSPCoder from "../../../public/DSPCoder.svg";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-[#2b2b2b] py-2 text-white px-4 flex gap-6 overflow-hidden max-h-10">
      <div className="w-24 flex justify-center items-center object-contain">
        <Link href="/">
          <Image
            src={DSPCoder}
            className="max-w-28  hover:scale-105 transition-all"
            alt="logo"
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
