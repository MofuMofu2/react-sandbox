import React from "react";
import HookReducerUp from "./HookReducerUp";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("初期状態はpropsの値でpタグのテキストがレンダリングされる", () => {
  const screen = render(<HookReducerUp init={0} />);
  expect(screen.getByText("0回クリックされました")).toBeInTheDocument();
});

it("カウントアップをクリックすると+1した値でpタグのテキストがレンダリングされる", async () => {
  // イベント検知のセットアップ
  const event = userEvent.setup();
  const screen = render(<HookReducerUp init={0} />);
  // ボタンをクリックする
  const button = screen.getByText("カウントアップ");
  await event.click(button);

  expect(screen.getByText("1回クリックされました")).toBeInTheDocument();
});

it("カウントダウンをクリックすると-1した値でpタグのテキストがレンダリングされる", async () => {
  // イベント検知のセットアップ
  const event = userEvent.setup();
  const screen = render(<HookReducerUp init={1} />);
  // ボタンをクリックする
  const button = screen.getByText("カウントダウン");
  await event.click(button);

  expect(screen.getByText("0回クリックされました")).toBeInTheDocument();
});

it("リセットをクリックすると-1した値でpタグのテキストがレンダリングされる", async () => {
  // イベント検知のセットアップ
  const event = userEvent.setup();
  const screen = render(<HookReducerUp init={0} />);
  // 初期状態から変化させるためカウントアップをクリック
  const button = screen.getByText("カウントアップ");
  await event.click(button);
  // リセットボタンをクリック
  const reset = screen.getByText("リセット");
  await event.click(reset);

  expect(screen.getByText("0回クリックされました")).toBeInTheDocument();
});
