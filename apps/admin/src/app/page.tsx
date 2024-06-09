import Dashboard from "@/components/Dashboard/Dashboard";
import ProblemUpload from "@/components/ProblemUpload/ProblemUpload";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="font-bold text-2xl border-b-2 py-4 border-gray-600">
        Admin Portal
      </div>
      <div className="flex gap-4">
        <Dashboard />
        <ProblemUpload />
      </div>
    </>
  );
};

export default page;
