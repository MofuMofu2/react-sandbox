import React, { useState } from "react";

export default function AgreementCheckbox() {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        name="agreement"
        onClick={handleChecked}
        checked={checked}
      />
      <label htmlFor="agreement">同意する</label>
    </div>
  );
}
