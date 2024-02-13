import React from "react";
import { render } from "@testing-library/react";
import StayExtensionSelectBox from "./StayExtensionSelectBox";

describe("初期状態のテスト", () => {
  it("コンポーネントが存在すること", () => {
    const content = render(<StayExtensionSelectBox />);
    expect(content.getByText("StayExtensionSelectBox")).toBeTruthy();
  });
});
