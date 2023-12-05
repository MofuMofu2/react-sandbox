import React from "react";
import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import "@testing-library/jest-dom";

import Todo from "./Todo";

describe("TODOコンポーネントの初期状態をテスト", () => {
  it("TODO記入用のフォームが存在する", () => {
    const content = render(
      <RecoilRoot>
        <Todo />
      </RecoilRoot>
    );
    const input = content.getByLabelText("やること：");

    // ラベルテキストが存在する
    expect(input).toBeTruthy();
    // フォームの初期値は空
    expect(input).toHaveValue("");
    // ボタンコンポーネントが存在する
    expect(content.getByText("追加")).toBeTruthy();
  });
});
