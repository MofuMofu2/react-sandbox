import React from "react";

export default function BlogList() {
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
