import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

export const Header = () => {
  return (
    <div className="flex max-md:flex-col justify-between max-xl:justify-around items-center max-lg:gap-[20%] mt-[70px] w-full">
      <hr className="max-xl:hidden ml-[16px] w-[150px] h-px text-red" />
      <div className="flex max-lg:flex-col justify-center items-center max-lg:gap-y-[30px]">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-[25px]">
            <div className="relative w-[30px] h-[30px]">
              <Image
                fill
                alt="avatar"
                src="/img/1.png"
                className="cursor-pointer"
              />
            </div>
            <div className="relative w-[30px] h-[30px]">
              <Image
                fill
                alt="avatar"
                src="/img/4.png"
                className="cursor-pointer"
              />
            </div>
            <div className="relative w-[30px] h-[30px]">
              <Image
                fill
                alt="avatar"
                src="/img/2.png"
                className="cursor-pointer"
              />
            </div>
            <div className="relative w-[30px] h-[30px]">y</div>
          </div>
        </div>
        <div className="flex justify-center items-center mr-[199px] ml-[235px]">
          <img src="./img/logo.png" alt="" />
        </div>
        <div className="flex justify-start items-center gap-[10px]">
          <Link href="/stake">
            <Button value={"Stack"} className=""></Button>
          </Link>
          <Button value={"connect wallet"} className=""></Button>
        </div>
      </div>
      <hr className="max-xl:hidden mr-4 w-[150px] text-red" />
    </div>
  );
};
