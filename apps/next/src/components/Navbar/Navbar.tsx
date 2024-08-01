"use client";
import Link from "next/link";
import React from "react";

import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { FaBlog } from "react-icons/fa";
import AuthPopupContent from "../AuthPopupContent/AuthPopupContent";
import { getSession, useSession } from "next-auth/react";

import { GetServerSideProps } from "next";
import NavbarSkeleton from "./NavbarSkeleton";
import ProfilePage from "../ProfilePage/ProfilePage";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};

const Navbar = () => {
  const { status } = useSession();

  if (status === "loading") {
    return <NavbarSkeleton />;
  }

  return (
    <div className="bg-black text-white py-2 px-4 flex gap-6 overflow-hidden min-h-10 max-h-12 sticky">
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
          Problems Page
        </Link>
        <div className="icons flex gap-3 items-center">
          {/* <button onClick={() => alert("Dark mode under construction!!!")}>
            <WiMoonAltFirstQuarter className="h-[20px] w-[20px]" />
          </button> */}

          {status == "unauthenticated" && <AuthPopupContent />}
          {status == "authenticated" && <ProfilePage />}
          <Link
            className="inline-flex justify-center items-center gap-2 bg-[#616828] hover:bg-[#4d531f] px-2 py-1 rounded-md transition-all duration-300"
            href="/blog"
          >
            Blog <FaBlog />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
