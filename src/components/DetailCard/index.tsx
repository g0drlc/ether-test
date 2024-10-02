export const DetailCard = (props: {
  title: string;
  subTitle1: string;
  value1: number;
  subTitle2: string;
  value2: number;
  percentShow: boolean;
}) => {
  return (
    <div className="flex flex-col bg-[#ffffff09] mr-[24px] ml-[24px] p-[32px] max-lg:p-x-[10px] rounded-[6px] w-[464px] max-lg:w-full">
      <p className="mb-[16px] font-bold text-white text-xl uppercase">
        {props.title}
      </p>
      <div
        className={`flex  ${
          props.percentShow ? "justify-start" : "justify-between"
        }`}
      >
        <div>
          <p className="font-extrabold text-[#ffffff66] text-xs uppercase">
            {props.subTitle1}
          </p>
          <p className="font-extrabold text-white text-xl"> {props.value1} </p>
        </div>
        <div>
          <p className="text-right font-extrabold text-[#ffffff66] text-xs uppercase">
            {props.subTitle2}
          </p>
          <p className="text-right font-extrabold text-white text-xl">
            {props.value2}
          </p>
        </div>
      </div>
      <div className="bg-black mt-[8px] p-[6px] rounded-[20px] w-full h-[22px]">
        <div
          className={`bg-gradient-to-r from-[#17C99E] to-[#A461FF] rounded-[20px] h-[10px]`}
          style={{ width: (props.value1 / props.value2) * 100 + "%" }}
        ></div>
      </div>
      {props.percentShow && <div></div>}
    </div>
  );
};
