import Card from "./Card";

interface CardData {
  title: string;
  info: string;
}
const PracticeEverySection = () => {
  const data : CardData[] = [
    {
      title:"RTOS",
      info:"Learn about FreeRTOS, multi threading, scheduler etc."
    },
    {
      title:"RTOS",
      info:"Learn about FreeRTOS, multi threading, scheduler etc."
    },
    {
      title:"RTOS",
      info:"Learn about FreeRTOS, multi threading, scheduler etc."
    },
    {
      title:"RTOS",
      info:"Learn about FreeRTOS, multi threading, scheduler etc."
    },
    {
      title:"RTOS",
      info:"Learn about FreeRTOS, multi threading, scheduler etc."
    },
    {
      title:"RTOS",
      info:"Learn about FreeRTOS, multi threading, scheduler etc."
    },
    {
      title:"RTOS",
      info:"Learn about FreeRTOS, multi threading, scheduler etc."
    },
    {
      title:"RTOS",
      info:"Learn about FreeRTOS, multi threading, scheduler etc."
    },
    {
      title:"RTOS",
      info:"Learn about FreeRTOS, multi threading, scheduler etc."
    },
  ]
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between mt-16 lg:mt-[15rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 pl-12">
        {data.map((obj, index) => (
          <Card key={index} info={obj.info} title={obj.title} />
        ))}
      </div>
      <div className="text-white lg:ml-16 lg:pr-12 pt-10">
        <div>
          <div>
              <span className="text-3xl lg:text-5xl w-full block font-bold">
                Practice every
              </span>
              <span className="text-3xl lg:text-5xl w-full block pt-3 font-bold">
                Embedded Concept
              </span>
          </div>
          <div className="w-full lg:w-[30rem] text-lg lg:text-xl mt-4 lg:mt-6 text-[#9ba3b4] font-semibold">
            <span>
              We offer structured courses on RTOS, device drivers, Linux drivers, low-level programming, communication protocols, etc.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeEverySection;