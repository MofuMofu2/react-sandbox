import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ProfilerBasic from "./component/Profiler/ProfilerBasic";

if (process.env.NODE_ENV === "development") {
  void import("./mocks/browser").then(({ worker }) => {
    worker.start();
  });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<ProfilerBasic />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
