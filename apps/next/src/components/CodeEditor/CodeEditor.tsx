"use client";

import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import ConfigSelectorMenu from "./components/ConfigSelectorMenu";
import CodeOutput from "../CodeOutput/CodeOutput";
import { CODE_SNIPPETS } from "@/constants/constants";

type Props = {};

const CodeEditor = (props: Props) => {
  const editorRef = useRef();
  const [value, setValue] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("cpp");

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <div className="w-full min-w-[400px]">
      <div>
        <ConfigSelectorMenu
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          setValue={setValue}
        />
        <Editor
          className="border border-t-0 border-gray-700 h-[50vh]  mb-0 pb-0"
          theme="vs-dark"
          language={selectedLanguage}
          value={value}
          defaultValue={
            CODE_SNIPPETS[selectedLanguage as keyof typeof CODE_SNIPPETS]
          }
          onMount={onMount}
          onChange={(value) => setValue(value || "")}
        />
      </div>

      <CodeOutput editorRef={editorRef} language={selectedLanguage} />
    </div>
  );
};

export default CodeEditor;
