import { Database } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@dspcoder/ui/components/ui/card";

interface MemoryProfileProps {
  memStat: {
    footprint: {
      heap_usage: number;
      stack_usage: number;
      total_ram: number;
    };
    memory_leak: Record<string, number>;
  };
}

export const MemoryProfile = ({ memStat }: MemoryProfileProps) => {
  return (
    <Card className="bg-darkish_100 border-gray-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-white">
          Memory Profile
        </CardTitle>
        <CardDescription className="text-gray-300">
          Detailed memory usage statistics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-2">
              Memory Footprint
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-3 rounded">
                <div className="flex justify-between items-center mb-1 flex-wrap">
                  <span className="text-xs text-gray-300">Heap Usage</span>
                  <span className="text-xs text-white">
                    {(memStat.footprint.heap_usage / 1024).toFixed(2)} KB
                  </span>
                </div>
                <div className="w-full bg-white rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full bg-green-700"
                    style={{
                      width: `${
                        (memStat.footprint.heap_usage /
                          memStat.footprint.total_ram) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="flex justify-between items-center mb-1 flex-wrap">
                  <span className="text-xs text-gray-300">Stack Usage</span>
                  <span className="text-xs text-white">
                    {(memStat.footprint.stack_usage / 1024).toFixed(2)} KB
                  </span>
                </div>
                <div className="w-full bg-white rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full bg-green-700"
                    style={{
                      width: `${
                        (memStat.footprint.stack_usage /
                          memStat.footprint.total_ram) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <div className="flex justify-between items-center mb-1 flex-wrap">
                  <span className="text-xs text-gray-300">Total RAM</span>
                  <span className="text-xs text-white">
                    {(memStat.footprint.total_ram / 1024).toFixed(2)} KB
                  </span>
                </div>
                <div className="w-full bg-white rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full bg-green-700"
                    style={{
                      width: "100%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-2">
              Memory Leaks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(memStat.memory_leak).map(
                ([key, value]: [string, any]) => (
                  <div key={key} className="bg-gray-800 p-3 rounded">
                    <div className="flex items-center justify-between flex-wrap">
                      <div className="flex items-center">
                        <Database className="h-4 w-4 text-purple-400 mr-2" />
                        <span className="text-xs capitalize text-white text-ellipsis text-wrap">
                          {key.replace("_", " ")}
                        </span>
                      </div>
                      <span className="text-xs text-white">{value} bytes</span>
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
