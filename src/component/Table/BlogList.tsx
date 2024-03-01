import React from "react";
import { type BlogPosts, type Users } from "./tableInterface";

type BlogListProps = {
  /**
   * ブログ記事の情報
   */
  blogList: BlogPosts[];
  /**
   * ユーザー情報
   */
  userList: Users[];
};

export default function BlogList({ ...props }: BlogListProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>記事ID</th>
          <th>タイトル</th>
          <th>投稿ユーザー</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Reactの使い方</td>
          <td>ユーザーA</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Vueの使い方</td>
          <td>ユーザーB</td>
        </tr>
      </tbody>
    </table>
  );
}
