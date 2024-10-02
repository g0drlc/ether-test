import { PictureCard } from "@/components/PictureCard";
import { RewardCard } from "@/components/RewardCard";

export default function Stake() {
  return (
    <div>
      <RewardCard />
      <div className="flex justify-center items-center mt-[17px]">
        <div className="flex flex-row bg-[#00000030] p-[3px] rounded-md font-extrabold">
          <div className="flex justify-center items-center bg-white px-4 py-[10px] rounded-[3px] text-black uppercase">
            My NFTS <li>16</li>
          </div>
          <div className="flex justify-center items-center px-4 py-[10px] rounded-[3px] text-white uppercase">
            staked<li>3</li>
          </div>
          <div className="flex justify-center items-center px-4 py-[10px] rounded-[3px] text-white uppercase">
            rewards<li>5</li>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <PictureCard />
        </div>
      </div>
    </div>
  );
}
