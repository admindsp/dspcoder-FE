"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import RecentBlogs from "./_components/RecentBlogs/RecentBlogs";
import TopBlogs from "./_components/TopBlogs/TopBlogs";
import { useMediaQuery } from "@uidotdev/usehooks";

const SearchBar = dynamic(() => import("./_components/SearchBar/SearchBar"), {
  ssr: false,
});

const queryClient = new QueryClient();

export default function Blog() {
  const isMobile = false;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen p-4 bg-white text-black">
        {isMobile && <SearchBar />}
        <div
          className="sm:container grid grid-cols-1 lg:grid-cols-[70fr_30fr] gap-4 w-full"
          id="blog-page"
        >
          <TopBlogs className="order-1 lg:order-2" />
          <div className="order-2 lg:order-1">
            {!isMobile && <SearchBar />}
            <RecentBlogs />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
