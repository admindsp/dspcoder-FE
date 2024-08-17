interface PropType {
  title: string;
  info: string;
}

const Card = (props: PropType) => {
  return (
    <div className="flex justify-between">
      <div className="text-white pr-8 flex items-center justify-center text-xl font-bold">
        <span className="w-full text-center">{props.title}</span>
      </div>
      <div className="text-[#9a9a9a] border-[0.1rem] bg-[#181818] border-[#2b2b2b] w-[23rem] pl-2 pt-2 pb-2 pr-1 rounded-md h-auto">
        <span>{props.info}</span>
      </div>
    </div>
  );
};
export default Card;