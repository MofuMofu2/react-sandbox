import React from "react";
import { render } from "@testing-library/react";
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

  // 実際は非表示だが取れてしまう
  it("モーダルのレンダリング", () => {
    const content = render(<AlertPage />);
    expect(content.queryByText("アラートテキストを表示")).toBeTruthy();
  });
});
