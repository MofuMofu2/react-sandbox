import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AlertPage from "./AlertPage";

describe("初期状態のテスト", () => {
  it("ページタイトルテキストが表示されている", () => {
    const content = render(<AlertPage />);
    expect(
      content.getByText("ボタンクリックでモーダルダイアログ表示を切り替える")
    ).toBeTruthy();
  });

  it("モーダル表示用ボタンがレンダリングされている", () => {
    const content = render(<AlertPage />);
    expect(content.getByRole("button", { name: "モーダル表示" })).toBeTruthy();
  });

  it("モーダルコンポーネントは非表示", () => {
    const content = render(<AlertPage />);
    expect(content.queryByText("アラートテキストを表示")).not.toBeTruthy();
  });
});

describe("モーダルダイアログの表示・非表示を切り替えられる", () => {
  it("モーダル表示ボタンをクリックするとダイアログウィンドウが表示される", async () => {
    const event = userEvent.setup();
    const content = render(<AlertPage />);
    await event.click(content.getByRole("button", { name: "モーダル表示" }));
    expect(content.queryByText("アラートテキストを表示")).toBeTruthy();
  });

  // ここは分けておいた方がいい。ごっちゃになると見落とす
  it("モーダルを一度表示した後OKボタンをクリックすると非表示になる", async () => {
    const event = userEvent.setup();
    const content = render(<AlertPage />);
    // モーダルウィンドウを表示
    await event.click(content.getByRole("button", { name: "モーダル表示" }));
    // OKボタンをクリック
    await event.click(content.getByRole("button", { name: "OK" }));
    // モーダルウィンドウが非表示になっているか
    expect(content.queryByText("アラートテキストを表示")).not.toBeTruthy();
  });
});
