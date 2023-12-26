import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import style from "./RouterApp.module.css";

export default function RouterApp() {
  return (
    <>
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
            さいしょのページ
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
          <NavLink to="/book-query?isbn=978-4-8156-0182-9">
            クエリでアクセスするページ
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
