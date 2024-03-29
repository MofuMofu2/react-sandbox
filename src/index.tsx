import React from "react";

import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import routesBasic from "./routesBasic";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return await worker.start();
}

void enableMocking().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(<RouterProvider router={routesBasic} />);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
