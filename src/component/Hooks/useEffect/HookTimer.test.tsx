import { render } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import HookTimer from "./HookTimer";

describe("HookTimerに関するテスト", () => {
  beforeEach(() => {
    jest.useFakeTimers(); // タイマーをモック化する
  });

  afterEach(() => {
    jest.useRealTimers(); // タイマーを元に戻す
  });

  it("Propsで渡された値から1秒ずつカウントが減ること", async () => {
    const screen = render(<HookTimer init={10} />);

    await act(() => {
      // 1秒待つ
      jest.advanceTimersByTime(1000);
    });

    // 9になっていることを確認する
    expect(screen.getByText("現在のカウント9")).toBeTruthy();
  });
});
