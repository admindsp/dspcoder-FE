import { Button } from "@dspcoder/ui/components/ui/button";
import React from "react";

type Props = {};

const ProblemCodeEditor = (props: Props) => {
  return (
    <div className="h-full">
      <div
        id="external-buttons"
        className="flex flex-row-reverse gap-2 items-center py-2"
      >
        <Button className="bg-grayish hover:bg-white hover:text-black text-white">
          Run
        </Button>
        <Button className="bg-grayish hover:bg-white hover:text-black text-white">
          Submit
        </Button>
      </div>

      <iframe
        src="http://test-test.eastus.azurecontainer.io:8080/?folder=/home/test"
        className="w-full h-full"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default ProblemCodeEditor;
