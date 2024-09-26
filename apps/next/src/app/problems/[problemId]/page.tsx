"use client";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  return <div>{router.query.problemId}</div>;
};

export default page;
