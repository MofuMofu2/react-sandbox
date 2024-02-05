import React from "react";
import { render } from "@testing-library/react";
import StayExtensionOptionsRadio from "./StayExtensionOptionsRadio";

describe("初期状態のテスト", () => {
  it("ラジオボタンは全部で4つ存在する", () => {
    const content = render(<StayExtensionOptionsRadio />);
    expect(content.getAllByRole("radio")).toHaveLength(4);
  });

  it("前泊のみのラベルテキストとvalueがデグレードしていない", () => {
    const content = render(<StayExtensionOptionsRadio />);
    const previous = content.getByText("前泊のみ");
    expect(previous).toBeTruthy();
    expect(previous).toHaveAttribute("value", "previous");
  });
});
