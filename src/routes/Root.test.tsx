import React from "react";
import Root from "./root";
import { render } from "@testing-library/react";
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
