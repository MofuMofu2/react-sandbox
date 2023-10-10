import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import StyledPanel from "./component/StyledPanel/StyledPanel";

if (process.env.NODE_ENV === "development") {
  void import("./mocks/browser").then(({ worker }) => {
    worker.start();
  });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StyledPanel
    title={<p>メンバー募集中</p>}
    body={<p>ようこそ、WINGSプロジェクトへ！</p>}
  />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
