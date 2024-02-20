import React from "react";

export default function StayExtensionSelectBox() {
  return (
    <select>
      <option value="none">宿泊なし</option>
      <option value="previous">前泊のみ</option>
      <option value="next">後泊のみ</option>
      <option value="both">前泊と後泊</option>
    </select>
  );
}
