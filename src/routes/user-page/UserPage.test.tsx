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

describe("APIリクエスト後のレンダリング内容", () => {
  it("ボタンクリックするとAPIリクエストが行われる", async () => {
    const content = render(<UserPage />);
    const button = content.getByRole("button", { name: "Fetch Data" });
    button.click();
    await waitFor(() => {
      expect(content.getByText("Username: string")).toBeInTheDocument();
      expect(content.getByText("Locale: ja")).toBeInTheDocument();
    });
  });
});
