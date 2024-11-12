"use client";
import React from "react";
import { GrDrag } from "react-icons/gr";
import "react-splitter-layout/lib/index.css";
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

type Props = {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
};

const ProblemContent = ({ leftContent, rightContent }: Props) => {
  return (
    <div className="flex min-h-0 flex-1">
      <PanelGroup autoSaveId="problem-window" direction="horizontal">
        <Panel
          minSizePercentage={10}
          defaultSizePercentage={30}
          maxSizePercentage={40}
        >
          {leftContent}
        </Panel>

        <PanelResizeHandle className="w-3 bg-darkish flex justify-center items-center">
          <GrDrag className="w-full h-full text-white" />
        </PanelResizeHandle>

        <Panel minSizePercentage={30}>{rightContent}</Panel>
      </PanelGroup>
    </div>
  );
};

export default ProblemContent;
