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
        {props.blogList.map((blog, index) => {
          const user = props.userList.find((user) => user.id === blog.userId);
          return (
            <tr key={index}>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>{user?.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
