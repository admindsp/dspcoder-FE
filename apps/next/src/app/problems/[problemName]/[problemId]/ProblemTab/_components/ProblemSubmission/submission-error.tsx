import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@dspcoder/ui/components/ui/card";
import { AlertCircle } from "lucide-react";

export function SubmissionError() {
  return (
    <Card className="bg-darkish_100 border-gray-700  min-w-[300px]">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            Submission Failed
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="text-wrap flex-wrap">
        <div className="mb-4 text-red-500 font-medium">
          Error: Kindly make sure you have run the build first before submitting
        </div>
        <div className="text-gray-300 space-y-2 pl-1 border-l-2 border-gray-700">
          <p className="text-sm">
            <span className="font-semibold">Suggestion:</span> Run the build
            command first and then try submitting again.
          </p>
          <p className="text-sm">
            <span className="font-semibold">Alternative:</span> If you've
            already built the project, wait a few moments and try again.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
