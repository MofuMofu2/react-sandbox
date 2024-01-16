import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";

describe("初期状態のテスト", () => {
  const content = render(<About />);
  it("h1タグがレンダリングされていること", () => {
    expect(content.getByText("About")).toBeInTheDocument();
  });

  it("初期状態では名前テキストはレンダリングされていない", () => {
    const content = render(<About />);
    expect(content.queryByText("mofu")).toBeNull();
  });

  it("初期状態ではフォーム内の値は存在しない", () => {
    const content = render(<About />);
    expect(content.getByLabelText("Type Your Name")).toHaveValue("");
  });
});
