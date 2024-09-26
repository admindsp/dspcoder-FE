"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RecentBlogs from "./_components/RecentBlogs/RecentBlogs";
import SearchBar from "./_components/SearchBar/SearchBar";
import TopBlogs from "./_components/TopBlogs/TopBlogs";
const queryClient = new QueryClient();
export default function Blog() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen p-4 bg-white text-black ">
        <div
          className="container grid grid-cols-[70fr_30fr] gap-4 w-full"
          id="blog-page"
        >
          <div>
            <SearchBar />
            <RecentBlogs />
          </div>
          <TopBlogs />
        </div>
      </div>
    </QueryClientProvider>
  );
}
