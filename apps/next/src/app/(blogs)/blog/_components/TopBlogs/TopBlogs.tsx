"use client";
import http_client from "@/app/api/client";
import { BlogType } from "@/types/Blog";
import { cn } from "@dspcoder/ui/lib/utils";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@dspcoder/ui/components/ui/carousel";
import TopBlogCard from "./TopBlogCard";
// import { useMediaQuery } from "@uidotdev/usehooks";

type Props = {
  className: string;
};

const TopBlogs = ({ className }: Props) => {
  const isDesktop = true;
  const { data: Blogs, isLoading } = useQuery({
    queryKey: ["FetchedTopArticles"],
    queryFn: async () => {
      const response = await http_client.get("/api/blogs", {
        params: {
          limit: 5,
          offset: 0,
          sort_by: "user_like_count",
        },
      });
      return response as BlogType[];
    },
  });
  return (
    <div className={cn(className, "sm:p-4  max-h-screen gap-2")}>
      <p className="font-bold md:text-lg bg-black bg-opacity-80 text-white px-2 py-2 h-fit rounded-lg">
        Top Articles
      </p>
      <Carousel
        orientation={isDesktop ? "vertical" : "horizontal"}
        className="w-full mt-2 max-w-fit mx-auto"
      >
        <CarouselContent className="h-fit min-w-full lg:h-[700px] lg:w-full ">
          {Blogs?.map((blog) => {
            return (
              <CarouselItem
                key={blog.id}
                className="max-w-fit lg:max-h-fit rounded-md"
              >
                <TopBlogCard data={blog} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-3 lg:left-1/2 lg:top-3" />
        <CarouselNext className="right-3 lg:right-0 lg:bottom-3" />
      </Carousel>
    </div>
  );
};

export default TopBlogs;
