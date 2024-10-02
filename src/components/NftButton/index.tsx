export const NftButton = (props: { title: string; color: string }) => {
  return (
    <div
      className={`flex justify-center ${props.color} uppercase px-[10px] py-[8px] text-xs leading-[13.06px] font-black rounded-[6px] px-[10px] py-[7px]`}
    >
      {props.title}
    </div>
  );
};
