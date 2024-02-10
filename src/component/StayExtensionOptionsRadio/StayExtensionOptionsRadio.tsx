import React, { useState } from "react";

const StayExtensionOptions = [
  { value: "previous", label: "前泊のみ" },
  { value: "next", label: "後泊のみ" },
  { value: "both", label: "前泊と後泊" },
  { value: "none", label: "宿泊なし" },
];

export default function StayExtensionOptionsRadio() {
  const [selectedValue, setSelectedValue] = useState("none");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      {StayExtensionOptions.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
