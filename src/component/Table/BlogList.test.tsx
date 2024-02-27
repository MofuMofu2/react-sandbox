import React from "react";
import { render } from "@testing-library/react";
import BlogList from "./BlogList";

describe("テーブルが表示できること", () => {
  it("テーブルヘッダーが表示できる", () => {
    expect(render(<BlogList />).getByText("記事ID")).toBeInTheDocument();
  });
});
