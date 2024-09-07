interface PropType {
  title: string;
  info: string;
}

const Card = (props: PropType) => {
  return (
    <div className="text-white bg-[#181818] rounded-lg border-[#2b2b2b] border-[0.1rem] cursor-pointer p-4">
      <h2 className="text-xl lg:text-xl flex justify-center font-semibold">{props.title}</h2>
      <span className="text-[#9a9a9a] text-xs flex justify-center pt-1 text-center font-[500]">
        {props.info}
      </span>
    </div>
  );
};

export default Card;