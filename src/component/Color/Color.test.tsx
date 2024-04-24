import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

it("フォームで指定した通りの背景色でレンダリングされている", async () => {
  const event = userEvent.setup();
  const content = render(<Color />);
  // フォーム入力値をクリア
  await event.clear(content.getByRole("textbox"));

  // フォームに赤色のカラーコードを入力
  await event.type(content.getByRole("textbox"), "#ff0000");

  // render-colorが赤色になっているか確認
  expect(content.getByTestId("render-color")).toHaveStyle({
    backgroundColor: "rgb(255, 0, 0)",
  });
});

it("フォームで指定した通りの背景色でレンダリングされている：Document.querySelector()の件", async () => {
  const event = userEvent.setup();
  const content = render(<Color />);
  // フォーム入力値をクリア
  await event.clear(content.getByRole("textbox"));

  // フォームに赤色のカラーコードを入力
  await event.type(content.getByRole("textbox"), "#ff0000");

  expect(
    content.container.querySelector('[data-testid="render-color"]')
  ).toHaveStyle({
    backgroundColor: "rgb(255, 0, 0)",
  });
});
