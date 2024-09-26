import { cn } from "@dspcoder/ui/lib/utils";
import React from "react";

const Skeleton = ({
  className = "",
  width = "w-full",
  height = "h-4",
  theme = "dark",
}) => {
  const shimmerTheme =
    theme === "dark"
      ? "bg-gray-900 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
      : "bg-gray-200 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200";
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "bg-no-repeat bg-[length:400px_100%] animate-shimmer",
        shimmerTheme,
        width,
        height,
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r opacity-10"></div>
    </div>
  );
};

export default Skeleton;
