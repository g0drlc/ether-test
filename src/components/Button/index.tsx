export const Button = (props: { value: string; className: string }) => {
  return (
    <button
      className={`bg-gradient-to-r from-[#667EEA] to-[#764BA2] px-[23px] py-[16px] rounded-md font-bold text-center text-lg/[50px] text-white uppercase leading-none ${props.className}`}
    >
      {props.value}
    </button>
  );
};
