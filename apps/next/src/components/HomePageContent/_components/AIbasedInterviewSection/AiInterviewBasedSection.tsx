import React from 'react'

const AiInterviewBasedSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between mt-12 md:mt-44 px-4 md:px-24'>
      <div className='bg-[#181818] w-full max-w-xs md:max-w-lg h-64 md:h-72 rounded-md border-gray-500 border-2'>
      </div>
      <div className='mt-8 md:mt-0 md:ml-8 flex flex-col pt-8'>
        <h1 className='text-white text-3xl md:text-5xl font-bold tracking-wide'> AI based interviewer </h1>
        <span className='text-[#9a9a9a] text-lg md:text-[1.4rem] mt-4 md:mt-2 w-full md:w-[35rem] font-semibold'>
          Improve your knowledge with questions from datasheets, manuals, code snippets, and more.
        </span>
      </div>
    </div>
  )
}

export default AiInterviewBasedSection
