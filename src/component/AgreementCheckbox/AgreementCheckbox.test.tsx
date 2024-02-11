import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AgreementCheckbox from "./AgreementCheckbox";

describe("初期状態に関するテスト", () => {
  it("ラベルテキストがデグレードしていない", () => {
    const content = render(<AgreementCheckbox />);
    expect(content.getByText("同意する")).toBeInTheDocument();
  });

  it("チェックボックスはOFFの状態で始まる", () => {
    const content = render(<AgreementCheckbox />);
    expect(content.getByRole("checkbox")).not.toBeChecked();
  });
});

describe("チェックボックス操作に関するテストケース", () => {
  it("チェックボックスを一度クリックすると状態が切り替わる", async () => {
    // イベント検知のセットアップ
    const event = userEvent.setup();
    const content = render(<AgreementCheckbox />);
    // チェックボックスをクリックする
    await event.click(content.getByRole("checkbox"));
    // チェック状態がONになっていることを確認
    expect(content.getByRole("checkbox")).toBeChecked();
  });

  it("チェックボックスONの状態でクリックするとOFF状態に切り替わる", async () => {
    // イベント検知のセットアップ
    const event = userEvent.setup();
    const content = render(<AgreementCheckbox />);
    // チェックボックスをクリックしてONにする
    await event.click(content.getByRole("checkbox"));
    // チェックボックスをクリックしてOFFにする
    await event.click(content.getByRole("checkbox"));
    // チェック状態がOFFになっていることを確認
    expect(content.getByRole("checkbox")).not.toBeChecked();
  });
});
