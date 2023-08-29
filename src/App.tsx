import * as React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./routes/root";

if (process.env.NODE_ENV === "development") {
  void import("./mocks/browser").then(({ worker }) => {
    worker.start();
  });
}

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />}></Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
