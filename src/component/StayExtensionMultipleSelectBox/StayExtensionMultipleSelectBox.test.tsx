import React from "react";
import { render } from "@testing-library/react";
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
