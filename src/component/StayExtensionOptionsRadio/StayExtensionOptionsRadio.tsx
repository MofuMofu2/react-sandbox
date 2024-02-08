import React, { useState } from "react";

export default function StayExtensionOptionsRadio() {
  const [selectedValue] = useState("none");
  return (
    <div>
      <label>
        <input
          type="radio"
          name="extension"
          value="previous"
          checked={selectedValue === "previous"}
        />
        前泊のみ
      </label>
      <label>
        <input
          type="radio"
          name="extension"
          value="next"
          checked={selectedValue === "next"}
        />
        後泊のみ
      </label>
      <label>
        <input
          type="radio"
          name="extension"
          value="both"
          checked={selectedValue === "both"}
        />
        前泊と後泊
      </label>
      <label>
        <input
          type="radio"
          name="extension"
          value="none"
          checked={selectedValue === "none"}
        />
        宿泊なし
      </label>
    </div>
  );
}
