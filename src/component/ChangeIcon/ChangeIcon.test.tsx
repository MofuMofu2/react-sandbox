import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChangeIcon from ".";

it("h2タグが2つ存在する", () => {
  const content = render(<ChangeIcon />);
  // h2タグが2つ存在することを確認
  expect(content.getAllByRole("heading", { level: 2 })).toHaveLength(2);
});

it("アイコン要素が存在することを確認する", () => {
  const content = render(<ChangeIcon />);
  // アイコン要素が存在することを確認
  expect(content.getByTestId("icon")).toBeInTheDocument();
});

it("ドロップダウンの値を変更するとアイコンが変わる", async () => {
  const event = userEvent.setup();
  const content = render(<ChangeIcon />);

  // アイコン要素を取得
  const image = content.getByTestId("icon");

  // data-icon属性がimageになっていることを確認
  expect(image).toHaveAttribute("data-icon", "music");

  // ドロップダウンの値を変更
  await event.selectOptions(content.getByRole("combobox"), "image");
  // アイコンのドキュメントが更新されていることを確認
  expect(
    content.getByText("選択しているアイコンは画像です")
  ).toBeInTheDocument();

  // data-icon属性がimageになっていることを確認
  expect(image).toHaveAttribute("data-icon", "image");
});
