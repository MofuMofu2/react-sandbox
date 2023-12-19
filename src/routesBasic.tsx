import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "./routes/About";
import TopPage from "./routes/TopPage";

const routesBasic = createBrowserRouter([
  { path: "/", element: <TopPage /> },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/article",
    element: <div>Article</div>,
  },
]);

export default routesBasic;
