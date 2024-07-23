import React from "react";
import TestimonialsCard from "./TestimonialsCard";

type Props = {};

const HomePageTestimonials = (props: Props) => {
  return (
    <div className="max-w-[760px] mx-auto py-10 text-center flex flex-col gap-4">
      <span className="text-4xl font-bold">
        Built by engineers working at the world’s best companies
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-5">
        {Array.from({ length: 10 }, (_, idx) => (
          <TestimonialsCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default HomePageTestimonials;
