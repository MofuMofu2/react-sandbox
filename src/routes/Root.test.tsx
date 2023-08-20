import React from "react";
import Root from "./root";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("removeボタンをクリックするとカラーリストが消えること", async () => {
  // イベント検知のセットアップ
  const event = userEvent.setup();
  const content = render(<Root />);

  // クリック前は3つのカラーがあること
  expect(content.getAllByRole("heading")).toHaveLength(3);

  // クリックするカラーは存在すること
  expect(content.queryByText("ocean at dusk")).toBeTruthy();

  // 1つ目のremoveボタンをクリックする
  await event.click(content.getAllByRole("button", { name: "remove" })[0]);

  // クリック後は2つのカラーがあること
  expect(content.getAllByRole("heading")).toHaveLength(2);

  // クリックしたカラーは消えていること
  expect(content.queryByText("ocean at dusk")).not.toBeTruthy();
});

it("新しく色を追加するとカラーの数が増えること", async () => {
  // イベント検知のセットアップ
  const event = userEvent.setup();
  const content = render(<Root />);

  // フォームに値を入力する
  const titleForm = content.getByLabelText("title");
  await event.type(titleForm, "Black");

  // colorフォームの値を更新する
  const colorForm = content.getByLabelText("color");
  await fireEvent.input(colorForm, { target: { value: "#000000" } });

  // ADDボタンをクリックする
  await event.click(content.getByRole("button", { name: "ADD" }));

  // カラーの数が増えていること
  expect(content.getAllByRole("heading")).toHaveLength(4);

  // テキストが追加されていること
  expect(content.queryByText("Black")).toBeTruthy();
});
