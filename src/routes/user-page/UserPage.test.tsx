import React from "react";
import { render } from "@testing-library/react";
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
