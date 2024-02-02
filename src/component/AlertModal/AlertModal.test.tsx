import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AlertModal from "./index";

describe("アラートコンポーネント要素に関するテスト", () => {
  it("アラート内テキストがデグレードしていない", () => {
    const content = render(<AlertModal />);
    expect(content.getByText("アラートテキストを表示")).toBeTruthy();
  });

  it("open propsがtrueであればアラートが表示される", () => {
    const content = render(<AlertModal open={true} />);
    expect(content.queryByText("アラートテキストを表示")).toBeTruthy();
  });

  it("open propsがfalseでもダイアログ要素はレンダリングされている", () => {
    const content = render(<AlertModal open={false} />);
    // HTML側の切り替えになるのでレンダリングはされている。
    expect(content.queryByText("アラートテキストを表示")).toBeTruthy();
  });

  it("ボタンクリックでイベント発火すること", async () => {
    const event = userEvent.setup();
    // イベントハンドラーのモックアップ
    const handleEvent = jest.fn();
    const content = render(<AlertModal onButtonClick={handleEvent} />);

    // OKボタンをクリック
    await event.click(content.getByRole("button", { name: "OK" }));
    // イベント発火すること
    expect(handleEvent).toHaveBeenCalled();
  });
});
