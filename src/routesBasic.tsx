import React from "react";
import { createBrowserRouter } from "react-router-dom";
import TopPage from "./routes/TopPage";

const routesBasic = createBrowserRouter([{ path: "/", element: <TopPage /> }]);

export default routesBasic;
