import React, { createContext, useState } from "react";
import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import style from "./RouterApp.module.css";

type NameContextType = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

// コンテキストを初期化する
export const NameContext = createContext<NameContextType | undefined>(
  undefined
);

export default function RouterApp() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <NameContext.Provider value={{ name, setName }}>
      <>
        <p>アクセス数：{count}</p>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? style.active : "")}
              reloadDocument
            >
              TopPage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/article"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              ContextでNameを表示するページ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/article/1"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              1番のページ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/article/2"
              preventScrollReset
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              2番のページ
            </NavLink>
          </li>
          <li>
            <NavLink to="/search/react/router/remix">検索結果</NavLink>
          </li>
          <li>
            <NavLink to="/noting/foo/bar">存在しないページ</NavLink>
          </li>
          <li>
            <NavLink to="/book-query" state="978-4-8156-0182-9">
              クエリでアクセスするページ
            </NavLink>
          </li>
          <li>
            <NavLink to="/alert-page">ボタンコンポーネントのテスト</NavLink>
          </li>
          <li>
            <NavLink to="/form-page">フォームコンポーネントのテスト</NavLink>
          </li>
          <li>
            <NavLink to="/users">
              APIリクエストを伴うコンポーネントのテスト
            </NavLink>
          </li>
          <li>
            <NavLink to="/loader">
              React RouterのLoaderを使うコンポーネントのテスト
            </NavLink>
          </li>
        </ul>
        <ScrollRestoration />
        <Outlet context={[count, setCount]} />
      </>
    </NameContext.Provider>
  );
}
