import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./routes/About";
import RouterApp from "./routes/RouterApp";
import TopPage from "./routes/TopPage";

const routesBasic = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterApp />}>
      <Route index element={<TopPage />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

export default routesBasic;
