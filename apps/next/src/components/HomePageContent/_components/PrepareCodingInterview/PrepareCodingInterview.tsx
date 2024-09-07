import CodingInterviewSideCard from "./CodingInterviewSideCard";

const PrepareCodingInterview = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between mt-[12rem] px-6 lg:px-12">
      <div className="text-white pt-16 pr-10">
        <div>
          <h1 className="text-4xl lg:text-5xl w-full lg:w-[30rem] font-bold">
            Prepare for
          </h1>
          <h1 className="text-4xl lg:text-5xl w-full lg:w-[30rem] font-bold md:pt-4">
            Coding Interview
          </h1>
        </div>
        <div className="w-full lg:w-[29rem] text-lg lg:text-xl mt-4 lg:mt-6 text-[#9ba3b4] font-[550]">
          <span>
            On DSPCoder you can prepare for your embedded coding interviews with
            a tailored company-specific preparation guide
          </span>
        </div>
      </div>
      <div className="flex align-middle justify-center flex-col gap-10">
        {data.cardData.map((obj, index) => (
          <>
            <CodingInterviewSideCard info={obj.info} title={obj.title} />
            <hr className="border-t-2 border-[#2b2b2b]" />
          </>
        ))}
        <CodingInterviewSideCard
          info="Learn software standards for aerospace, automobile. medical equipment and other domains."
          title="Domain Specific Question Bank"
        />
      </div>
    </div>
  );
};
export default PrepareCodingInterview;
