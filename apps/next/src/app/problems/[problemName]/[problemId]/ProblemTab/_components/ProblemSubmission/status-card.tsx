import { Clock, MemoryStickIcon as Memory, Database } from "lucide-react";
import { Badge } from "@dspcoder/ui/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@dspcoder/ui/components/ui/card";

interface StatusCardProps {
  metadata: {
    overall_status: string;
    Total_Time: number;
    mem_stat: {
      footprint: {
        total_ram: number;
      };
      memory_leak: {
        definitely_lost: number;
      };
    };
  };
  passedTestCases: number;
  totalTestCases: number;
}

export const SubmissionStatusCard = ({
  metadata,
  passedTestCases,
  totalTestCases,
}: StatusCardProps) => {
  const passRate = (passedTestCases / totalTestCases) * 100;

  return (
    <Card className="bg-darkish_100 border-gray-700">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold text-white">
            Submission Result
          </CardTitle>
          <Badge
            className={`text-white ${metadata.overall_status === "PASS" ? "bg-green-600" : "bg-red-600"}`}
          >
            {metadata.overall_status}
          </Badge>
        </div>
        <CardDescription className="text-gray-300">
          Execution completed in {metadata.Total_Time.toFixed(2)}ms
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-400" />
            <div>
              <p className="text-sm text-gray-300">Runtime</p>
              <p className="font-medium text-white">
                {metadata.Total_Time.toFixed(2)}ms
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Memory className="h-5 w-5 text-purple-400" />
            <div>
              <p className="text-sm text-gray-300">Memory</p>
              <p className="font-medium text-white">
                {(metadata.mem_stat.footprint.total_ram / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Database className="h-5 w-5 text-yellow-400" />
            <div>
              <p className="text-sm text-gray-300">Memory Leaks</p>
              <p className="font-medium text-white">
                {metadata.mem_stat.memory_leak.definitely_lost} bytes
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-white">
            <span>
              Test Cases: {passedTestCases}/{totalTestCases} passed
            </span>
            <span>{passRate.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-white rounded-full h-3">
            <div
              className="h-3 rounded-full bg-green-700"
              style={{ width: `${passRate}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
