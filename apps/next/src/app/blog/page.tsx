import React from "react";
import BlogCard from "@/components/BlogCard/BlogCard";
import {
  ArticleContent,
  BlogContent,
  RecommendedQuestions,
} from "@/constants/BlogData";
import BlogRecommendedQuestions from "@/components/BlogCard/BlogRecommendedQuestions";
import ArticleCard from "@/components/BlogCard/ArticleCard";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="md:flex md:flex-row flex-col">
      <div className="left_panel w-full pl-4 pr-4">
        <div className="flex flex-col gap-6">
          {BlogContent.map((blog, idx) => {
            return (
              <BlogCard
                title={blog.title}
                description={blog.description}
                img={blog.img}
                key={idx}
              />
            );
          })}
        </div>
      </div>
      <div className="right_panel md:w-[55%] w-full">
        <div className="text-lg ml-4 mr-4 border-b-4 font-semibold">
          <p>Recommended Questions</p>
        </div>
        <div className="flex flex-col gap-4 ml-4 mr-4">
          {RecommendedQuestions.map((ques, ques_idx) => {
            return (
              <BlogRecommendedQuestions
                question={ques.question}
                key={ques_idx}
              />
            );
          })}
        </div>
        <div className="ml-4 mr-4 border-b-[1px] border-black pt-4">
          <h6 className="text-md font-semibold pb-1">Top Articles</h6>
        </div>
        <div className="ml-4 mr-4 pt-2">
          {ArticleContent.map((article, article_idx) => {
            return (
              <ArticleCard
                title={article.title}
                description={article.description}
                date={article.date}
                img={article.img}
                key={article_idx}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
