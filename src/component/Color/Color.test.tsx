import React from "react";
import { render } from "@testing-library/react";
import Color from "./Color";

it("デフォルトのカラーコード値#000000が画面にレンダリングされている", () => {
  const content = render(<Color />);
  expect(content.getByText("#000000")).toBeTruthy();
});

it("h2タグで色を選ぶ領域のタイトルテキストがレンダリングされている", () => {
  const content = render(<Color />);
  expect(content.getByRole("heading", { name: "色を選ぶ" })).toBeTruthy();
});

it("h2タグで選んだ色を描画する領域のタイトルテキストがレンダリングされている", () => {
  const content = render(<Color />);
  expect(content.getByRole("heading", { name: "選んだ色" })).toBeTruthy();
});
