import React from "react";
import { render, waitFor } from "@testing-library/react";
import Root from "./Root";
import i18n from "../i18n/i18n";

// APIのモック
global.fetch = jest.fn(
  async () =>
    await Promise.resolve({
      ok: true,
      json: async () =>
        await Promise.resolve({ username: "user1", locale: "en" }),
    })
) as jest.Mock;

describe("Root Component", () => {
  it("fetches data on mount and updates state and i18n language", async () => {
    render(<Root />);

    await waitFor(() => {
      // 状態の更新を検証するためのコードをここに書く
      // 例: expect(getByText(/user1/)).toBeInTheDocument();

      // i18nの言語設定が更新されたかどうかを検証
      expect(i18n.language).toBe("en");
    });
  });

  // 他のテストケースをここに追加
});
