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
});
