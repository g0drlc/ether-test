import Image from "next/image";
import { BoxCountIcon } from "../Svglist";

export const RewardCard = () => (
  <div className="flex justify-center">
    <div className="flex justify-between items-center gap-[32px] bg-[#00000030] pr-[25px]">
      <div className="flex flex-col px-6 py-7">
        <div className="flex justify-between font-bold text-base text-white uppercase leading-4">
          <p>next reward</p>
          <p>3 days</p>
        </div>
        <div
          className={`bg-gradient-to-r mt-[12px] mb-[12px] from-[#17C99E] to-[#A461FF] rounded-[20px] h-[10px]`}
          style={{ width: "30%" }}
        ></div>
        <div className="uppercase">
          <p className="font-bold text-[13px] text-white uppercase leading-[13px]">
            weeek bonus:<span>1 Mystery box</span>
          </p>
        </div>
      </div>
      <div className="relative">
        <img src="./img/box.svg" alt="box" className="relative" />
        <div className="top-0 right-0 absolute">
          <BoxCountIcon />
          <span className="top-0 right-0 bottom-0 left-0 absolute flex justify-center items-center font-bold text-black text-sm">
            5x
          </span>
        </div>
      </div>
    </div>
  </div>
);
