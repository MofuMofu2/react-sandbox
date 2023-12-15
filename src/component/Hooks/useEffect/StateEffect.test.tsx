import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { act } from "react-dom/test-utils";
import StateEffect from "./StateEffect";

it("countの値が変化するとuseEffectの処理が実行される", async () => {
  const event = userEvent.setup();
  const screen = render(<StateEffect init={0} />);

  // 初回のレンダリング結果
  expect(screen.getByText("0 回クリックされた")).toBeInTheDocument();

  await act(async () => {
    // カウントボタンをクリックする
    await event.click(screen.getByText("カウント"));
  });

  expect(screen.getByText("1 回クリックされた")).toBeInTheDocument();
});
