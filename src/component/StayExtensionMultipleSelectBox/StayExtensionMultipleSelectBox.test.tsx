import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StayExtensionMultipleSelectBox from "./StayExtensionMultipleSelectBox";

describe("初期状態のテスト", () => {
  it("選択肢は全部で4つ存在する", () => {
    const content = render(<StayExtensionMultipleSelectBox />);
    expect(content.getAllByRole("option")).toHaveLength(4);
  });

  it("前泊のみのラベルテキストとvalueがデグレードしていない", () => {
    const content = render(<StayExtensionMultipleSelectBox />);
    expect(content.getByText("前泊のみ")).toBeTruthy();
    expect(content.getByRole("option", { name: "前泊のみ" })).toHaveValue(
      "previous"
    );
  });
});

describe("オプションが選べることをテスト", () => {
  it("オプションラベルを選択すると対応するvalueが選択状態になる", async () => {
    // イベント検知のセットアップ
    const event = userEvent.setup();
    const content = render(<StayExtensionMultipleSelectBox />);
    // オプションを全て取得
    const options = content.getAllByRole("option");
    // 前泊を選択
    await event.selectOptions(content.getByRole("listbox"), [options[1]]);
    // 前泊が選択されている
    expect(content.getByRole("listbox")).toHaveValue(["previous"]);
  });
});
