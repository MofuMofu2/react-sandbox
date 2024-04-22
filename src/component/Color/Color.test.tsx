import React from "react";
import { render } from "@testing-library/react";
import Color from "./Color";

it("デフォルトのカラーコード値#000000が画面にレンダリングされている", () => {
  const content = render(<Color />);
  expect(content.getByText("#000000")).toBeTruthy();
});
