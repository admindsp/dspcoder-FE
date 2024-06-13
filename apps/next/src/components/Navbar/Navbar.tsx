"use client";
import Link from "next/link";
import React, { useState } from "react";
import DSPCoder from "../../../public/DSPCoder.svg";
import Image from "next/image";

import { Dialog, DialogTrigger } from "@dspcoder/ui/components/ui/dialog";
import Signup from "../Signup/Singup";
import Login from "../Login/Login";

const Navbar = () => {
  return (
    <div className="bg-[#2b2b2b] py-2 text-white px-4 flex gap-6 overflow-hidden min-h-10 max-h-12">
      <div className="w-24 flex justify-center items-center object-contain">
        <Link href="/">
          <Image
            src={DSPCoder}
            className="max-w-28  hover:scale-105 transition-all"
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex justify-between w-full items-center">
        <Link
          href="/problems"
          className="font-sans font-semibold hover:text-gray-300 transition-all"
        >
          Problems
        </Link>
        <div className="icons flex gap-3 items-center">
          <Dialog>
            <DialogTrigger className="flex items-center justify-center gap-2 px-2 py-1 bg-purple-700 rounded-md font-semibold text-sm hover:bg-purple-800 transition-all">
              Sign Up
            </DialogTrigger>
            <Signup />
          </Dialog>
          <Dialog>
            <DialogTrigger className="flex items-center justify-center gap-2 px-2 py-1 bg-purple-700 rounded-md font-semibold text-sm hover:bg-purple-800 transition-all">
              Sign In
            </DialogTrigger>
            <Login />
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
