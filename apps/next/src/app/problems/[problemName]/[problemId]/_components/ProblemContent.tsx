"use client";
import React from "react";
import { GrDrag } from "react-icons/gr";
import "react-splitter-layout/lib/index.css";
import ProblemDescription from "./ProblemDescription";
import ProblemCodeEditor from "./ProblemCodeEditor";
import dynamic from "next/dynamic";

const PanelResizeHandle = dynamic(() =>
  import("react-resizable-panels").then(
    ({ PanelResizeHandle }) => PanelResizeHandle,
  ),
);
const PanelGroup = dynamic(() =>
  import("react-resizable-panels").then(({ PanelGroup }) => PanelGroup),
);
const Panel = dynamic(() =>
  import("react-resizable-panels").then(({ Panel }) => Panel),
);
type Props = {};

const ProblemContent = (props: Props) => {
  return (
    <PanelGroup className="" autoSaveId="problem-window" direction="horizontal">
      <Panel minSizePercentage={20} defaultSizePercentage={30}>
        <ProblemDescription />
      </Panel>

      <PanelResizeHandle className="w-3 bg-darkish flex justify-center items-center">
        <GrDrag className="w-full h-full text-white" />
      </PanelResizeHandle>

      <Panel minSizePercentage={30}>
        <ProblemCodeEditor />
      </Panel>
    </PanelGroup>
  );
};

export default ProblemContent;
