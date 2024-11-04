"use client";

import { Button } from "@dspcoder/ui/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-white w-full min-h-[90vh] flex flex-col justify-center items-center gap-3">
      <h2 className="text-3xl">Apologies for the inconvenience. 🥲</h2>
      <h2 className="text-xl">Our Team is looking into this. </h2>
      <Button
        className="bg-gray-100 hover:bg-gray-200 text-black"
        onClick={() => reset()}
      >
        Try again
      </Button>
    </div>
  );
}
