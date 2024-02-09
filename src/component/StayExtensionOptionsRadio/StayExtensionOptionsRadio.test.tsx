import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    expect(content.getByRole("radio", { name: "宿泊なし" })).toBeChecked();
  });

  it("最初は「宿泊なし」以外は選択されていない", () => {
    const content = render(<StayExtensionOptionsRadio />);
    expect(content.getByRole("radio", { name: "前泊のみ" })).not.toBeChecked();
    expect(content.getByRole("radio", { name: "後泊のみ" })).not.toBeChecked();
    expect(
      content.getByRole("radio", { name: "前泊と後泊" })
    ).not.toBeChecked();
  });

  it("別の選択肢をクリックすると選択状態が切り替わる", async () => {
    // イベント検知のセットアップ
    const event = userEvent.setup();
    const content = render(<StayExtensionOptionsRadio />);

    // 「前泊のみ」をクリック
    await event.click(content.getByRole("radio", { name: "前泊のみ" }));
    // 「前泊のみ」が選択されている
    expect(content.getByRole("radio", { name: "前泊のみ" })).toBeChecked();

    // 「宿泊なし」は選択されていない
    expect(content.getByRole("radio", { name: "宿泊なし" })).not.toBeChecked();
  });
});
