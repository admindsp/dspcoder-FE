import React from "react";
import { PacmanLoader } from "react-spinners";
const ProblemCodeEditorLoader = () => {
  return (
    <div className="h-full text-white flex flex-col justify-center items-center gap-2">
      <PacmanLoader className="w-14 h-14 text-white bg-white" />
      <span>Your workspace is getting ready</span>
    </div>
  );
};

export default ProblemCodeEditorLoader;
