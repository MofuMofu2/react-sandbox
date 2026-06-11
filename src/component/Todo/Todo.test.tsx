import React from "react";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Todo from "./Todo";
import { resetStore } from "../../store/atom";

beforeEach(() => {
  resetStore();
});

describe("TODOコンポーネントの初期状態をテスト", () => {
  it("TODO記入用のフォームが存在する", () => {
    const content = render(<Todo />);
    const input = content.getByLabelText("やること：");

    // ラベルテキストが存在する
    expect(input).toBeTruthy();
    // フォームの初期値は空
    expect(input).toHaveValue("");
    // ボタンコンポーネントが存在する
    expect(content.getByText("追加")).toBeTruthy();
  });
});
