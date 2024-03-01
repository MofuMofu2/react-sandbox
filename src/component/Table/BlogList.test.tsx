import React from "react";
import { render } from "@testing-library/react";
import BlogList from "./BlogList";
import { blogPostsMock, usersMock } from "./tableMock";

describe("テーブルが表示できること", () => {
  it("テーブルヘッダーが表示できる", () => {
    expect(
      render(
        <BlogList blogList={blogPostsMock} userList={usersMock} />
      ).getByText("記事ID")
    ).toBeInTheDocument();
  });
});
