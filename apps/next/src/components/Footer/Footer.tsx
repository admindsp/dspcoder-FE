import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="min-h-20 py-4 px-4 bg-gradient-to-b from-darkish to-[#2b2b2b] flex justify-center items-center gap-4 text-gray-400 font-semibold">
      <span>@Copyright 2024 DSPCoder</span>
    </div>
  );
};

export default Footer;
