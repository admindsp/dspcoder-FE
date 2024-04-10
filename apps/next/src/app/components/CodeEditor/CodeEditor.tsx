"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import ConfigSelectorMenu from "./components/ConfigSelectorMenu";

type Props = {};

const CodeEditor = (props: Props) => {
  return (
    <div className="w-full">
      <ConfigSelectorMenu />
      <Editor
        className="border border-t-0 border-gray-700 h-[50vh]"
        theme="vs-dark"
        defaultLanguage="cpp"
        defaultValue="// some comment"
      />
    </div>
  );
};

export default CodeEditor;
