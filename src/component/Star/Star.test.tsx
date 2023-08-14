import React from "react";
import { render } from "@testing-library/react";
import Star from "./";

it("選択状態のときは赤色でレンダリングされる", () => {
  const screen = render(<Star selected={true} />);
  expect(screen.getByTitle("red")).toBeTruthy();
});

it("選択状態のときは灰色でレンダリングされる", () => {
  const screen = render(<Star selected={false} />);
  expect(screen.getByTitle("grey")).toBeTruthy();
});
