"use client";
import http_client from "@/app/api/client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import RecentBlogsSkeleton from "./RecentBlogsSkeleton";
import BlogCard from "./BlogCard";
import { BlogType } from "@/types/Blog";

const RecentBlogs = () => {
  const { data: Blogs, isLoading } = useQuery({
    queryKey: ["FetchedBlogData"],
    queryFn: async () => {
      const response = await http_client.get("/api/blogs", {
        params: {
          limit: 4,
          offset: 0,
        },
      });
      return response as BlogType[];
    },
  });

  if (isLoading) return <RecentBlogsSkeleton />;

  return (
    <div className="mt-4 grid grid-flow-row gap-6">
      {Blogs?.map((blog) => {
        return <BlogCard key={blog.id} data={blog} />;
      })}
    </div>
  );
};

export default RecentBlogs;
