import React from "react";
import { render } from "@testing-library/react";
import AgreementCheckbox from "./AgreementCheckbox";

describe("初期状態に関するテスト", () => {
  it("ラベルテキストがデグレードしていない", () => {
    const { getByText } = render(<AgreementCheckbox />);
    expect(getByText("同意する")).toBeInTheDocument();
  });

  it("チェックボックスはOFFの状態で始まる", () => {
    const { getByRole } = render(<AgreementCheckbox />);
    expect(getByRole("checkbox")).not.toBeChecked();
  });
});
