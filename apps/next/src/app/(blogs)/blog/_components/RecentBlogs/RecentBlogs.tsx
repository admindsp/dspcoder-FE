"use client";
import http_client from "@/app/api/client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import RecentBlogsSkeleton from "./RecentBlogsSkeleton";

const RecentBlogs = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["FetchedBlogData"],
    queryFn: async () => {
      const response = await http_client.get("/api/blogs");
      console.log(response);
      return response;
    },
  });

  if (!isLoading) return <RecentBlogsSkeleton />;

  return <div className="mt-4">RecentBlogs</div>;
};

export default RecentBlogs;
