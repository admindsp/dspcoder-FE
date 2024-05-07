"use client";
import Link from "next/link";
import React from "react";

import DSPCoder from "../../../public/DSPCoder.svg";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@dspcoder/ui/components/ui/dialog";

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
          <Dialog>
            <DialogTrigger className="flex items-center justify-center gap-2 px-2 py-1 bg-purple-700 rounded-md font-semibold text-sm hover:bg-purple-800 transition-all">
              Sign In
            </DialogTrigger>
            <DialogContent className="bg-darkish">
              <DialogHeader>
                <DialogTitle>Sign Up / Sign In</DialogTitle>
                <form className="flex flex-col gap-3">
                  <input type="email"></input>
                  <input type="password"></input>
                  <button
                    type="submit"
                    className="bg-red-500 px-2 py-1 rounded"
                  >
                    Sign Up
                  </button>
                </form>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
