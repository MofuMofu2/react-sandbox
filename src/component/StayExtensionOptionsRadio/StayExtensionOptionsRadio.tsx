import React, { useState } from "react";

export default function StayExtensionOptionsRadio() {
  const [selectedValue, setSelectedValue] = useState("none");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="extension"
          value="previous"
          checked={selectedValue === "previous"}
          onChange={handleChange}
        />
        前泊のみ
      </label>
      <label>
        <input
          type="radio"
          name="extension"
          value="next"
          checked={selectedValue === "next"}
          onChange={handleChange}
        />
        後泊のみ
      </label>
      <label>
        <input
          type="radio"
          name="extension"
          value="both"
          checked={selectedValue === "both"}
          onChange={handleChange}
        />
        前泊と後泊
      </label>
      <label>
        <input
          type="radio"
          name="extension"
          value="none"
          checked={selectedValue === "none"}
          onChange={handleChange}
        />
        宿泊なし
      </label>
    </div>
  );
}
