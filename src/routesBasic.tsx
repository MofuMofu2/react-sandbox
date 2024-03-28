import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./routes/About";
import AlertPage from "./routes/alert-page/AlertPage";
import Article from "./routes/Article";
import BookQueryPage from "./routes/BookQueryPage";
import FormPage from "./routes/form-page/FormPage";
import LoaderPage from "./routes/loader-page/LoaderPage";
import NotFoundPage from "./routes/NotFoundPage";
import RouterApp from "./routes/RouterApp";
import SearchPage from "./routes/SearchPage";
import TopPage from "./routes/TopPage";
import UserPage from "./routes/user-page/UserPage";

const routesBasic = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterApp />}>
      <Route index element={<TopPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/article/:id?" element={<Article />} />
      <Route path="/search/*" element={<SearchPage />} />
      <Route path="/book-query" element={<BookQueryPage />} />
      <Route path="/alert-page" element={<AlertPage />} />
      <Route path="/form-page" element={<FormPage />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/loader" element={<LoaderPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default routesBasic;
