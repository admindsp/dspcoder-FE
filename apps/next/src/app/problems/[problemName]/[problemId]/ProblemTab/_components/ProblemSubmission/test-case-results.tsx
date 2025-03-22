import { CheckCircle, XCircle } from "lucide-react";
import { Badge } from "@dspcoder/ui/components/ui/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@dspcoder/ui/components/ui/Card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@dspcoder/ui/components/ui/accordion";

interface TestCaseResultsProps {
  testCases: Record<string, any>;
  passedTestCases: number;
  totalTestCases: number;
}

export const TestCaseResults = ({
  testCases,
  passedTestCases,
  totalTestCases,
}: TestCaseResultsProps) => {
  return (
    <Card className="bg-darkish_100 border-gray-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-white">
          Test Case Results
        </CardTitle>
        <CardDescription className="text-gray-300">
          {passedTestCases} passed, {totalTestCases - passedTestCases} failed
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {Object.entries(testCases).map(
            ([testId, testData]: [string, any]) => (
              <AccordionItem
                key={testId}
                value={testId}
                className="border-gray-700"
              >
                <AccordionTrigger className="hover:bg-gray-800 rounded px-3 text-white">
                  <div className="flex items-center w-full">
                    {testData.status === "PASS" ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mr-2" />
                    )}
                    <span className="text-sm font-medium">{testId}</span>
                    <Badge
                      className={`ml-auto ${testData.status === "PASS" ? "bg-green-600/20 text-green-400" : "bg-red-600/20 text-red-400"}`}
                    >
                      {testData.status}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-3 py-2 bg-gray-900/50 rounded-b">
                  {testData.status === "FAIL" && (
                    <div className="text-sm text-red-400 mb-2">
                      <p>
                        Failed: This test case did not pass the expected output.
                      </p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="space-y-1">
                      <p className="text-gray-300">Input:</p>
                      <pre className="bg-gray-800 p-2 rounded text-xs overflow-x-auto text-white">
                        {testData.input || "Input data not available"}
                      </pre>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-300">Expected Output:</p>
                      <pre className="bg-gray-800 p-2 rounded text-xs overflow-x-auto text-white">
                        {testData.expected || "Expected output not available"}
                      </pre>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          )}
        </Accordion>
      </CardContent>
    </Card>
  );
};
