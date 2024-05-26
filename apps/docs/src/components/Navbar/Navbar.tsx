"use client";
import Link from "next/link";
import React from "react";

import DSPCoder from "../../../public/DSPCoder.svg";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-[#2b2b2b] py-2 text-white px-4 flex gap-6 overflow-hidden max-h-16">
      <div className="w-24 relative">
        <Link href="/">
          <Image
            src={DSPCoder}
            className="absolute max-w-28 -top-[43px] -left-4 hover:scale-105 transition-all"
            alt="logo"
          ></Image>
        </Link>
      </div>

      <div className="flex justify-between w-full items-center">
        <Link
          href="/docs"
          className="font-sans font-semibold hover:text-gray-300 transition-all"
        >
          Docs
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
