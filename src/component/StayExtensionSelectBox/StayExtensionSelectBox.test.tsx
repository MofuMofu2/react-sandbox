import React from "react";
import { render } from "@testing-library/react";
import StayExtensionSelectBox from "./StayExtensionSelectBox";

describe("初期状態のテスト", () => {
  it("選択肢は全部で4つ存在する", () => {
    const content = render(<StayExtensionSelectBox />);
    expect(content.getAllByRole("option")).toHaveLength(4);
  });
});
