import React from "react";
import { render, waitFor } from "@testing-library/react";
import UserPage from "./UserPage";

describe("APIリクエスト前のレンダリング内容", () => {
  it("ボタンコンポーネントがレンダリングされていること", () => {
    const content = render(<UserPage />);
    expect(
      content.getByRole("button", { name: "Fetch Data" })
    ).toBeInTheDocument();
  });

  it("初めはAPIリクエスト情報がないのでNo dataが表示されている", () => {
    const content = render(<UserPage />);
    expect(content.getByText("No data")).toBeInTheDocument();
  });
});

describe("APIリクエスト後のレンダリング内容（jest.mock）", () => {
  // fetchへの参照をセット
  const originalFetch = global.fetch;
  beforeEach(() => {
    global.fetch = jest.fn(); // fetchをjest.fn()でモック化
  });

  // 各テスト後にモックをクリーンアップ
  afterEach(() => {
    global.fetch = originalFetch; // 元の参照に戻す
  });

  it("ボタンクリックするとAPIリクエストが行われる", async () => {
    // モックのレスポンスを設定
    const mockUserData = { username: "testUser", locale: "en" };
    // mockResolvedValueOnceはjest.MockのAPIで、fetchのレスポンスをモック化する
    // だからasキャストで無理やりつけるしかない
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => await Promise.resolve(mockUserData),
    });
    const content = render(<UserPage />);
    const button = content.getByRole("button", { name: "Fetch Data" });
    button.click();
    // UIを更新してからテストを起動する
    await waitFor(() => {
      expect(content.getByText("testUser")).toBeInTheDocument();
      expect(content.getByText("en")).toBeInTheDocument();
    });
  });
});
