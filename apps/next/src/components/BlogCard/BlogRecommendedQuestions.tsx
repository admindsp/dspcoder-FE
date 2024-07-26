import React from 'react'

type BlogRecommendedQuestionsProps={
    question: string;
};


const BlogRecommendedQuestions = ({
    question,
}:BlogRecommendedQuestionsProps) => {
  return (
    <div className=''>
      <ul>
        <li className=''>{question}</li>
      </ul>
    </div>
  )
}

export default BlogRecommendedQuestions
