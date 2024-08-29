"use client";

import React, { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import ConfigSelectorMenu from "./components/ConfigSelectorMenu";
import CodeOutput from "../CodeOutput/CodeOutput";
import { CODE_SNIPPETS } from "@/constants/constants";
import CodeTerminal from "../CodeTerminal/CodeTerminal";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { GrDrag } from "react-icons/gr";

type CodeEditorProps = {
  fileContent: string;
};

const CodeEditor = ({ fileContent }: CodeEditorProps) => {
  const editorRef = useRef<any>(null);
  const [value, setValue] = useState<string>(fileContent);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("cpp");

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  useEffect(() => {
    setValue(fileContent);
  }, [fileContent]);

  return (
    <PanelGroup direction="vertical">
      <Panel minSize={20} defaultSize={60}>
        <ConfigSelectorMenu
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          setValue={setValue}
        />
        <Editor
          className="border border-t-0 border-gray-700 mb-0 pb-0"
          theme="vs-dark"
          language={selectedLanguage}
          value={value}
          defaultValue={fileContent}
          onMount={onMount}
          onChange={(value: any) => setValue(value || "")}
          options={{
            scrollBeyondLastLine: false,
          }}
        />
      </Panel>
      <PanelResizeHandle className="w-full h-3 bg-black flex justify-center items-center">
        <GrDrag className="w-full h-full text-white" />
      </PanelResizeHandle>
      <Panel minSize={20} defaultSize={40}>
        <CodeOutput editorRef={editorRef} language={selectedLanguage} />
      </Panel>
    </PanelGroup>
  );
};

export default CodeEditor;
