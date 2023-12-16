import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HookReducer from "./HookReducer";

it("初期状態はpropsの値でpタグのテキストがレンダリングされる", () => {
  const screen = render(<HookReducer init={0} />);
  expect(screen.getByText("0回クリックされました")).toBeInTheDocument();
});

it("クリックすると+1した値でpタグのテキストがレンダリングされる", async () => {
  // イベント検知のセットアップ
  const event = userEvent.setup();
  const screen = render(<HookReducer init={0} />);
  // ボタンをクリックする
  const button = screen.getByText("Count");
  await event.click(button);

  expect(screen.getByText("1回クリックされました")).toBeInTheDocument();
});
