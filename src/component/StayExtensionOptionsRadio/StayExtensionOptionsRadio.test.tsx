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
    expect(content.getByText("前泊のみ")).toBeTruthy();
    expect(content.getByRole("radio", { name: "前泊のみ" })).toHaveAttribute(
      "value",
      "previous"
    );
  });
});

describe("クリックしたとき選択状態が切り替わる", () => {
  it("最初は「宿泊なし」が選択されている", () => {
    const content = render(<StayExtensionOptionsRadio />);
    const radio = content.getByRole("radio", { name: "宿泊なし" });
    expect(radio).toBeChecked();
  });
});
