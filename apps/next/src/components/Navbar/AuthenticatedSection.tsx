"use client";
import React from "react";
import NavbarSkeleton from "./NavbarSkeleton";
import { useSession } from "next-auth/react";
import AuthPopupContent from "../AuthPopupContent/AuthPopupContent";
import ProfilePage from "../ProfilePage/ProfilePage";

type Props = {};

const AuthenticatedSection = (props: Props) => {
  const { status } = useSession();

  if (status === "loading") {
    return <NavbarSkeleton />;
  }

  return (
    <>
      {status == "unauthenticated" && <AuthPopupContent />}
      {status == "authenticated" && <ProfilePage />}
    </>
  );
};

export default AuthenticatedSection;
