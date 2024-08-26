"use client";
import React from "react";
import CodeEditor from "@/app/problem/[problemName]/_components/CodeEditor/CodeEditor";
import FileExplorer from "./_components/FileExplorer/FileExplorer";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import CodeTerminal from "./_components/CodeTerminal/CodeTerminal.";
import { MdOutlineDragIndicator } from "react-icons/md";
import { RxDragHandleDots1 } from "react-icons/rx";
import { GrDrag } from "react-icons/gr";

type Props = {};

const Problem: React.FC<Props> = () => {
  return (
    <PanelGroup
      className="min-h-screen px-2"
      autoSaveId="problem-window"
      direction="horizontal"
    >
      <Panel minSize={10} defaultSize={25}>
        <FileExplorer />
      </Panel>
      <PanelResizeHandle className="w-3 bg-black flex justify-center items-center">
        <GrDrag className="w-full h-full text-white" />
      </PanelResizeHandle>
      <Panel minSize={30} defaultSize={50}>
        <CodeEditor />
      </Panel>
      <PanelResizeHandle className="w-3 bg-black flex justify-center items-center">
        <GrDrag className="w-full h-full text-white" />
      </PanelResizeHandle>
      <Panel minSize={10} defaultSize={30}>
        <CodeTerminal />
      </Panel>
    </PanelGroup>
  );
};

export default Problem;
