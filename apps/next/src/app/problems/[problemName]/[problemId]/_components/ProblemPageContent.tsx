"use client";

import React, { useMemo } from "react";
import { GrDrag } from "react-icons/gr";
import dynamic from "next/dynamic";
import ProblemCodeEditor from "../ProblemCodeEditor/page";
import ProblemTab from "../ProblemTab/ProblemTab";
import { ProblemType } from "@/types/Problem";

const PanelResizeHandle = dynamic(() =>
  import("react-resizable-panels").then(
    ({ PanelResizeHandle }) => PanelResizeHandle
  )
);
const PanelGroup = dynamic(() =>
  import("react-resizable-panels").then(({ PanelGroup }) => PanelGroup)
);
const Panel = dynamic(() =>
  import("react-resizable-panels").then(({ Panel }) => Panel)
);

type ProblemPageContentProps = {
  params: {
    problemName: string;
    problemId: string;
  };
  searchParams: {
    tab: string;
  };
  problemData: ProblemType;
};

const ProblemContent = ({
  params,
  searchParams,
  problemData,
}: ProblemPageContentProps) => {
  const memoizedProblemTab = useMemo(
    () => <ProblemTab tab={searchParams.tab} problemData={problemData} />,
    [searchParams.tab, problemData]
  );

  return (
    <div className="flex flex-col w-full ">
      <PanelGroup
        autoSaveId="problem-window"
        className="flex-grow overflow-hidden min-h-[calc(100vh-47px)] "
        direction="horizontal"
      >
        <Panel
          minSizePercentage={10}
          maxSizePercentage={40}
          defaultSizePercentage={40}
        >
          {memoizedProblemTab}
        </Panel>

        <PanelResizeHandle className="w-3 bg-darkish flex justify-center items-center">
          <GrDrag className="w-full h-full text-white" />
        </PanelResizeHandle>

        <Panel minSizePercentage={30} defaultSizePercentage={60}>
          <ProblemCodeEditor />
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default ProblemContent;
