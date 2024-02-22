import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StateForm from "./NameForm";

describe("初期表示に関するテスト", () => {
  it("苗字のフォームには山田と入力されている", () => {
    const content = render(<StateForm />);
    expect(content.getByRole("textbox", { name: "苗字" })).toHaveValue("山田");
  });

  it("名前のフォームには太郎と入力されている", () => {
    const content = render(<StateForm />);
    expect(content.getByRole("textbox", { name: "名前" })).toHaveValue("太郎");
  });
});

describe("フォーム入力値を編集したときのテスト", () => {
  it("苗字のフォームを編集すると入力したときの値でテキストが表示される", async () => {
    const event = userEvent.setup();
    const content = render(<StateForm />);

    // 苗字のフォームを編集する
    await event.type(content.getByRole("textbox", { name: "苗字" }), "田中");

    // フォームの値が変更されたことを確認
    expect(content.getByRole("textbox", { name: "苗字" })).toHaveValue("田中");

    // 苗字のフォームを編集したときの値でテキストが表示される
    expect(
      content.getByText("こんにちは、田中 太郎さん！")
    ).toBeInTheDocument();
  });
});
