import { Selected } from "../Svglist";

export const SelectIcon = (props: { value: boolean; onChange: () => void }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="relative hidden w-6 h-6"
        checked={props.value}
        onChange={props.onChange}
      />
      <div
        className={`flex items-center justify-center w-6 h-6 rounded-sm border-2 ${
          props.value ? "border-[#2CE6FF]" : "border-[#FFFFFF]"
        }`}
      >
        {props.value && <Selected />}
      </div>
    </div>
  );
};
