import React from "react";
import CodeEditor from "@/components/CodeEditor/CodeEditor";

type Props = {};

const Problem = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-between h-screen">
      <div className="min-w-[400px]  dark:bg-darkish">Problem Description</div>
      <CodeEditor />
    </div>
  );
};

export default Problem;
