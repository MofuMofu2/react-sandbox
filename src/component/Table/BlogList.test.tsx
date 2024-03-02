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

describe("テーブル要素の表示に関するテスト", () => {
  it("記事IDの列はpostsのidが表示される", () => {
    const content = render(
      <BlogList blogList={blogPostsMock} userList={usersMock} />
    );

    // 二列目のtr要素を取得
    const tr = content.getAllByRole("row");

    // 二列目のtr要素に記事IDが表示されているか確認
    expect(tr[1].querySelectorAll("td")[0]).toHaveTextContent("1");
  });

  it("タイトルIDはpostsのtitleが表示される", () => {
    const content = render(
      <BlogList blogList={blogPostsMock} userList={usersMock} />
    );

    // 二列目のtr要素を取得
    const tr = content.getAllByRole("row");

    // 二列目のtd要素にタイトルが表示されているか確認
    expect(tr[1].querySelectorAll("td")[1]).toHaveTextContent(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
  });

  it("投稿ユーザーIDは/usersのidとuserIdが一致しているものを表示する", () => {
    const content = render(
      <BlogList blogList={blogPostsMock} userList={usersMock} />
    );

    // 二列目のtr要素を取得
    const tr = content.getAllByRole("row");

    // 二列目のtd要素に投稿ユーザーが表示されているか確認
    expect(tr[1].querySelectorAll("td")[2]).toHaveTextContent("Leanne Graham");
  });
});
