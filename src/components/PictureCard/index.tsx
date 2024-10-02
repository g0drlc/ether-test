import Image from "next/image";
import { NftButton } from "../NftButton";

export const PictureCard = () => {
  return (
    <div className="flex flex-col">
      <div className="relative w-60 h-60">
        <Image
          fill
          alt="avatar"
          src="/img/nft1.png"
          className="cursor-pointer"
        />
        <div className="top-[10px] left-[10px] absolute bg-[#00000085] px-[10px] py-[7px] rounded-sm font-extrabold text-sm text-white leading-none">
          #3809
        </div>
      </div>
      <div className="flex justify-between">
        <NftButton title={"mythic"} color={"text-[#871118]"} />
      </div>
    </div>
  );
};
