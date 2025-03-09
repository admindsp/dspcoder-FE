import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="/logo.svg"
      alt="DSP Coder Logo"
      className="h-[50px]"
      width={100}
      height={100}
    />
  );
};

export default Logo;
