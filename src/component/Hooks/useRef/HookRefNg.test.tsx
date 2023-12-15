import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import HookRefNg from "./HookRefNg";

it("ボタンをクリックすると1秒ずつ待ち、開始ボタンを押すと秒数ごとにカウントする", async () => {
  const event = userEvent.setup();
  const screen = render(<HookRefNg />);
  // 開始ボタンをクリック
  await event.click(screen.getByText("開始"));
  // Reactのstate更新が完了するのを待つ
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });
  const element = await screen.findByText("1秒経過");
  // countの値とテキストを組み合わせた形でレンダリングされていることをテストする
  expect(element).toBeInTheDocument();

  // 終了ボタンをクリック
  await event.click(screen.getByText("終了"));
  // Reactのstate更新が完了するのを待つ
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });
  const end = await screen.findByText("1秒経過");
  // countが止まっていることをテストする
  expect(end).toBeInTheDocument();
});
