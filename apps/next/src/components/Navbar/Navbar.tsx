"use client";
import Link from "next/link";
import React, { useState } from "react";
import DSPCoder from "@/assets/DSPCoder.svg";
import Image from "next/image";

import { Dialog, DialogTrigger } from "@dspcoder/ui/components/ui/dialog";
import Signup from "../Signup/Singup";
import Login from "../Login/Login";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { FaBlog, FaRegUserCircle, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-darkish text-white py-2 px-4 flex gap-6 overflow-hidden min-h-10 max-h-12 sticky">
      <div className="w-24 flex justify-center items-center object-contain">
        <Link href="/">
          <span className="font-bold">DSPCODER</span>
        </Link>
      </div>

      <div className="flex justify-between w-full items-center">
        <Link
          href="/problems"
          className="font-sans font-semibold hover:text-gray-300 transition-all text-sm"
        >
          Problems
        </Link>
        <div className="icons flex gap-3 items-center">
          <button onClick={() => alert("Dark mode under construction!!!")}>
            <WiMoonAltFirstQuarter className="h-[20px] w-[20px]" />
          </button>

          <Dialog>
            <DialogTrigger className="flex items-center justify-center gap-2 px-2 py-1  rounded-md font-semibold text-sm  transition-all ">
              <FaRegUserCircle className="h-[20px] w-[20px]" />
            </DialogTrigger>
            <Signup />
          </Dialog>
          <button
            className="inline-flex justify-center items-center gap-2 bg-[#616828] hover:bg-[#4d531f] px-2 py-1 rounded-md transition-all duration-300"
            onClick={() => alert("Blog creation under progress !!!")}
          >
            Blog <FaBlog />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
