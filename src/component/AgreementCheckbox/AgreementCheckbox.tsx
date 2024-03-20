import React, { useState } from "react";

type AgreementCheckboxProps = {
  onCheckboxStatusChanged?: (event: boolean) => void;
};

export default function AgreementCheckbox({
  onCheckboxStatusChanged,
}: AgreementCheckboxProps) {
  const [checked, setChecked] = useState(false);

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    onCheckboxStatusChanged?.(event.target.checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        name="agreement"
        onChange={handleChecked}
        checked={checked}
      />
      <label htmlFor="agreement">同意する</label>
    </div>
  );
}
