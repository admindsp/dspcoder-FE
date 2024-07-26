import React from 'react'

type BlogCardProps = {
  title: string;
  description: string;
  img: string;
};



const BlogCard = ({
  title,
  description,
  img,
}:BlogCardProps) => {
  return (
    <div className='border-b border-slate-200 shadow-sm rounded-md bg-slate-50 flex flex-row gap-6 justify-between mx-auto p-2'>
      <div className="titleanddes flex flex-col gap-1">
        <p className='text-lg font-semibold'>{title}</p>
        <p className='text-sm text-gray-500'>{description}</p>
      </div>
      <div className="image w-[150px] max-h-[100px]">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default BlogCard

