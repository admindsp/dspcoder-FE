"use client";
import HomePageContent from "@/components/HomePageContent/HomePageContent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen p-4 bg-[#0e0e0e]">
        <HomePageContent />
      </div>
    </QueryClientProvider>
  );
}
