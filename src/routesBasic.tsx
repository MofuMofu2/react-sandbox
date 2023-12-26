import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./routes/About";
import Article from "./routes/Article";
import BookQueryPage from "./routes/BookQueryPage";
import NotFoundPage from "./routes/NotFoundPage";
import RouterApp from "./routes/RouterApp";
import SearchPage from "./routes/SearchPage";
import TopPage from "./routes/TopPage";

const routesBasic = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterApp />}>
      <Route index element={<TopPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/article/:id?" element={<Article />} />
      <Route path="/search/*" element={<SearchPage />} />
      <Route path="/book-query" element={<BookQueryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default routesBasic;
