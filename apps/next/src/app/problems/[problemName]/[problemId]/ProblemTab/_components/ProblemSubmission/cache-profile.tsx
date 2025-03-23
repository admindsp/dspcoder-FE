import { BarChart3, CpuIcon, Layers, GitBranch } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@dspcoder/ui/components/ui/card";

interface CacheProfileProps {
  cacheProfile: Record<string, number>;
}

export const CacheProfile = ({ cacheProfile }: CacheProfileProps) => {
  return (
    <Card className="bg-darkish_100 border-gray-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-white">
          Cache Profile
        </CardTitle>
        <CardDescription className="text-gray-300">
          Cache hit/miss statistics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(cacheProfile).map(([key, value]: [string, any]) => (
              <div key={key} className="bg-gray-800 p-4 rounded">
                <div className="flex items-center mb-2">
                  {key.includes("l1") ? (
                    <CpuIcon className="h-5 w-5 text-blue-400 mr-2" />
                  ) : key.includes("l2") ? (
                    <Layers className="h-5 w-5 text-green-400 mr-2" />
                  ) : (
                    <GitBranch className="h-5 w-5 text-yellow-400 mr-2" />
                  )}
                  <span className="text-sm capitalize text-white">
                    {key.replace("_", " ")}
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold text-white">{value}</span>
                  <span className="text-xs text-gray-300">misses</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-sm font-medium text-gray-300 mb-3 flex items-center">
              <BarChart3 className="h-4 w-4 mr-2 text-blue-400" />
              Cache Performance Visualization
            </h3>
            <div className="space-y-3">
              {Object.entries(cacheProfile).map(
                ([key, value]: [string, any]) => (
                  <div key={key} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="capitalize text-gray-300">
                        {key.replace("_", " ")}
                      </span>
                      <span className="text-white">{value} misses</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          key.includes("l1")
                            ? "bg-blue-500"
                            : key.includes("l2")
                              ? "bg-green-500"
                              : "bg-yellow-500"
                        }`}
                        style={{ width: `${Math.min(value / 10, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
