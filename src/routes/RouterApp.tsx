import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function RouterApp() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">TopPage</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
