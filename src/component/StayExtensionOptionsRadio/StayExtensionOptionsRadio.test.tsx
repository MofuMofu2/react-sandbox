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
    const previous = content.getByText("前泊のみ");
    expect(previous).toBeTruthy();
    expect(previous).toHaveAttribute("value", "previous");
  });
});

describe("ラジオボタンをチェックしたときのテスト", () => {
  it("クリックすると選択状態になる", async () => {
    // イベント検知のセットアップ
    const event = userEvent.setup();
    const content = render(<StayExtensionOptionsRadio />);
    // 前泊のみが選択されていることを確認
    expect(content.getByText("前泊のみ")).toHaveAttribute("checked");
    // 後泊のみをクリック
    await event.click(content.getByLabelText("後泊のみ"));
    // 後泊のみが選択されていることを確認
    expect(content.getByText("後泊のみ")).toHaveAttribute("checked");
    expect(content.getByText("前泊のみ")).not.toHaveAttribute("checked");
  });
});
