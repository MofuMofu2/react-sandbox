import React from "react";
import { render } from "@testing-library/react";
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
