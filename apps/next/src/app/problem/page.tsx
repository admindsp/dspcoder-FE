import React from "react";
import CodeEditor from "@/components/CodeEditor/CodeEditor";

type Props = {};

const Problem = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="w-[55%] min-w-[400px]">Problem Description</div>
      <CodeEditor />
    </div>
  );
};

export default Problem;
