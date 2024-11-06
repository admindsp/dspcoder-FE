"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <CldImage
      src="dsplogo_amngcp"
      width="30"
      height="30"
      alt="logo"
      crop={{
        type: "auto",
        source: true,
      }}
    />
  );
};

export default Logo;
