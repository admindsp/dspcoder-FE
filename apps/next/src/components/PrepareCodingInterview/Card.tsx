interface PropType {
  title: string;
  info: string;
}

const Card = (props: PropType) => {
  return (
    <div className="text-white bg-[#181818] rounded-lg border-[#2b2b2b] border-[0.1rem] cursor-pointer">
      <h2 className="text-xl lg:text-sm flex align-middle justify-center pt-2 font-semibold">
        {props.title}
      </h2>
      <span className="text-[#9a9a9a] text-xs flex justify-center align-middle text-center font-[500] pt-4">
        {props.info}
      </span>
    </div>
  );
};
export default Card;