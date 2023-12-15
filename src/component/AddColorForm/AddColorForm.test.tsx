import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import AddColorForm from ".";

it("タイトルフォームに値を入力するとフォームテキストにも反映される", async () => {
  // イベント検知のセットアップ
  const event = userEvent.setup();
  const content = render(<AddColorForm />);

  // フォームに値を入力する
  const form = content.getByLabelText("title");
  await event.type(form, "Red");

  // 値がフォームテキストに反映されていることを確認する
  expect(form).toHaveValue("Red");
});

it("色の入力フォームの値を変更するとフォームにも反映される", async () => {
  const content = render(<AddColorForm />);

  // colorフォームの値を更新する
  const form = content.getByLabelText("color");
  fireEvent.input(form, { target: { value: "#FF0000" } });

  expect(form).toHaveValue("#ff0000");
});
