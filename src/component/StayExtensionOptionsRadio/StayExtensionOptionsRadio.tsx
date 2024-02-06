import React from "react";

export default function StayExtensionOptionsRadio() {
  return (
    <div>
      <label>
        <input type="radio" name="extension" value="previous" checked />
        前泊のみ
      </label>
      <label>
        <input type="radio" name="extension" value="next" />
        後泊のみ
      </label>
      <label>
        <input type="radio" name="extension" value="both" />
        前泊と後泊
      </label>
      <label>
        <input type="radio" name="extension" value="none" />
        宿泊なし
      </label>
    </div>
  );
}
