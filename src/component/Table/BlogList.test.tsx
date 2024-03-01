import React from "react";
import { render } from "@testing-library/react";
import BlogList from "./BlogList";
import { blogPostsMock, usersMock } from "./tableMock";

describe("テーブルヘッダーが表示できる", () => {
  it("テーブルヘッダーのリストがデグレードしていない", () => {
    const content = render(
      <BlogList blogList={blogPostsMock} userList={usersMock} />
    );
    // テキストが存在するか確認
    expect(content.getByText("記事ID")).toBeInTheDocument();

    // ARIA-Role属性でヘッダーが取得できるか確認
    const headers = content.getAllByRole("columnheader");

    // 見出し「タイトル」が存在するか確認
    expect(headers[1]).toHaveTextContent("タイトル");

    // 見出し「投稿ユーザー」が存在するか確認
    expect(headers[2]).toHaveTextContent("投稿ユーザー");
  });
});
