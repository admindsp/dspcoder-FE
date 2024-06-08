import ProblemUpload from "@/components/ProblemUpload/ProblemUpload";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="font-bold text-2xl">Admin Portal</div>
      <div>
        <ProblemUpload />
      </div>
    </>
  );
};

export default page;
