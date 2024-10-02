export const Picture = () => {
  return (
    <div className="-z-50">
      <div className="flex justify-center">
        <img src="./img/pic1.png" alt="" />
      </div>
      <div className="top-[1%] -z-50 absolute">
        <img src="./img/pic2.png" alt="" />
      </div>
      <div className="right-[0%] bottom-[1%] -z-50 absolute">
        <img src="./img/pic3.png" alt="" />
      </div>
      <div className="top-[0.5%] right-[11%] -z-50 absolute">
        <img src="./img/pic4.png" alt="" />
      </div>
    </div>
  );
};
