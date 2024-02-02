import React from "react";
import { render } from "@testing-library/react";
import AlertModal from "./index";

describe("アラートコンポーネント要素に関するテスト", () => {
  it("アラート内テキストがデグレードしていない", () => {
    const content = render(<AlertModal />);
    expect(content.getByText("アラートテキストを表示"));
  });
});
