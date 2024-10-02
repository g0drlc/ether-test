export const Footer = () => {
  return (
    <div className="relative flex justify-center items-center border-[#FFFFFF] border-t-[1px] w-full text-center">
      <p className="mt-[56px] mb-[24px] font-bold text-[#ffffff40] uppercase">
        Designed & developed by
        <span className="underline cursor-pointer"> Decentralized Maniacs</span>
      </p>
      <div className="-top-[40%] absolute">
        <img src="./img/logo.png" alt="" />
      </div>
    </div>
  );
};
