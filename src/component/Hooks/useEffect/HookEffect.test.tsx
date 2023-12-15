import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { act } from "react-dom/test-utils";
import HookEffect from "./HookEffect";

it("ボタンをクリックするとuseEffectの処理が実行される", async () => {
  const event = userEvent.setup();
  const screen = render(<HookEffect init={10} />);

  // 初回のレンダリング結果
  expect(screen.getByText("10 回クリックされた")).toBeInTheDocument();

  await act(async () => {
    // カウントボタンをクリックする
    await event.click(screen.getByText("カウント"));
  });

  expect(screen.getByText("11 回クリックされた")).toBeInTheDocument();
});
