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
          <NavLink to="/article/1">1番のページ</NavLink>
        </li>
        <li>
          <NavLink to="/article/2">2番のページ</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
