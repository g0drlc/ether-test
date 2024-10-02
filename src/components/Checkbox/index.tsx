import React, { useState } from "react";
import { SelectIcon } from "../SelectIcon";

export const Checkbox = () => {
  const handleChange = () => {
    setChecked(!checked);
  };
  const [checked, setChecked] = useState(false);
  return (
    <div className={`flex justify-between gap-[10px] items-center`}>
      <div
        className={`text-xs uppercase font-bold ${
          checked ? "color-[#2CE6FF]" : "color-[#FFFFFF]"
        }`}
      >
        select
      </div>
      <SelectIcon value={checked} onChange={handleChange} />
    </div>
  );
};
