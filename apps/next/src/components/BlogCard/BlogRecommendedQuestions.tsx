import React from "react";

type BlogRecommendedQuestionsProps = {
  question: string;
};

const BlogRecommendedQuestions = ({
  question,
}: BlogRecommendedQuestionsProps) => {
  return (
    <div>
      <ul>
        <li>{question}</li>
      </ul>
    </div>
  );
};

export default BlogRecommendedQuestions;
