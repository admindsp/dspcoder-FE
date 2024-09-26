"use client";
import http_client from "@/app/api/client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

const RecentBlogs = () => {
  const fetchRecentBlogData = async () => {
    try {
      const response = await http_client.get("/api/blogs");
      return response.data;
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  useEffect(() => {
    const response = fetchRecentBlogData();
    console.log(response);
  }, []);

  return <div className="mt-4">RecentBlogs</div>;
};

export default RecentBlogs;
