import Card from "./Card"

interface card {
  title: string,
  info: string,
}

const PrepareCodingInterview = () => {
  const data: card[] = [
    {
      title: "Data Structures",
      info: "Learn about FreeRTOSj multi threading, scheduler etc."
    },
    {
      title: "RTOS",
      info: "Learn about FreeRTOSi multi threading, scheduler etc."
    },
    {
      title: "RTOS",
      info: "Learn about FreeRTOSi multi threading, scheduler etc."
    },
    {
      title: "Low Level",
      info: "..."
    },
    {
      title: "Drivers",
      info: "---"
    },
    {
      title: "Drivers",
      info: "---"
    },
    {
      title: "Aero",
      info: "Learn about FreeRTOS, multi threading, scheduler etc."
    },
    {
      title: "Automobile",
      info: "Learn about FreeRTOS, multi threading, scheduler etc."
    },
    {
      title: "Medical",
      info: "Learn about FreeRTOS, multi threading, scheduler etc."
    },
  ]
  return (
    <div className="flex flex-col lg:flex-row justify-between mt-[12rem] px-6 lg:px-12">
      <div className="text-white pt-16 pr-40">
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
            On DSPCoder you can prepare for your embedded coding interviews with a tailored company-specific preparation guide
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8 lg:mt-0">
        {data.map((obj, index) => (
          <Card key={index} info={obj.info} title={obj.title} />
        ))}
      </div>
    </div>
  )
}
export default PrepareCodingInterview