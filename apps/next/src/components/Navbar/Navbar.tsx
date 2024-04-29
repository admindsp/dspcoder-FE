"use client";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
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
          href="/problem"
          className="font-sans font-semibold hover:text-gray-300 transition-all"
        >
          Problems
        </Link>
        <div className="icons">
          <button className="flex items-center justify-center gap-2 px-2 py-1 bg-purple-700 rounded-md font-semibold text-sm hover:bg-purple-800 transition-all">
            Sign In
            <CgProfile className="scale-150" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
