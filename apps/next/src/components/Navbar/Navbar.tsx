"use client";
import Link from "next/link";
import React, { useState } from "react";
import DSPCoder from "../../../public/DSPCoder.svg";
import Image from "next/image";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@dspcoder/ui/components/ui/dialog";

const Navbar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/register/",
        {
          email,
          password,
        }
      );
      console.log("User registered:", response.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="bg-[#2b2b2b] py-2 text-white px-4 flex gap-6 overflow-hidden h-fit max-h-16">
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
        <div className="icons">
          <Dialog>
            <DialogTrigger className="flex items-center justify-center gap-2 px-2 py-1 bg-purple-700 rounded-md font-semibold text-sm hover:bg-purple-800 transition-all">
              Sign In
            </DialogTrigger>
            <DialogContent className="bg-darkish">
              <DialogHeader>
                <DialogTitle>Sign Up / Sign In</DialogTitle>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="text-black border border-gray-300 rounded-md p-2"
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="text-black border border-gray-300 rounded-md p-2"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
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
