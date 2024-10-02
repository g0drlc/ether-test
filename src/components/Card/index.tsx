export const Card = () => {
  return (
    <div className="flex justify-center mb-[116px]">
      <div className="flex flex-row bg-[url('/img/effect1.png')]">
        <div className="flex flex-col bg-[#ffffff09] mr-[24px] p-[32px] rounded-[6px] w-[464px]">
          <p className="mb-[16px] font-bold text-white text-xl uppercase">
            Distibuted tekio
          </p>
          <div className="flex justify-between">
            <div>
              <p className="font-extrabold text-[#ffffff66] text-xs uppercase">
                current
              </p>
              <p className="font-extrabold text-white text-xl">4817121.20</p>
            </div>
            <div>
              <p className="text-right font-extrabold text-[#ffffff66] text-xs uppercase">
                Total Supply
              </p>
              <p className="text-right font-extrabold text-white text-xl">
                10 000 000 000.00
              </p>
            </div>
          </div>
          <div className="bg-black mt-[8px] p-[6px] rounded-[20px] w-full h-[22px]">
            <div className="bg-gradient-to-r from-[#17C99E] to-[#A461FF] rounded-[20px] w-[50%] h-[10px]"></div>
          </div>
        </div>
        <div className="flex flex-col bg-[#ffffff09] p-[32px] rounded-[6px] w-[464px]">
          <p className="mb-[16px] font-bold text-white text-xl uppercase">
            Total Staked nfts
          </p>
          <div className="flex flex-row">
            <div className="mr-[18px]">
              <p className="font-extrabold text-[#ffffff66] text-left text-xs uppercase">
                staked
              </p>
              <p className="font-extrabold text-white text-xl">3252</p>
            </div>
            <div>
              <p className="font-extrabold text-[#ffffff66] text-left text-xs uppercase">
                total
              </p>
              <p className="font-extrabold text-left text-white text-xl">
                5500
              </p>
            </div>
          </div>
          <div className="bg-black mt-[8px] p-[6px] rounded-[20px] w-full h-[22px]">
            <div className="bg-gradient-to-r from-[#17C99E] to-[#A461FF] rounded-[20px] w-[50%] h-[10px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
