import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import reportWebVitals from "./reportWebVitals";
import ChangeLanguage from "./component/ChangeLanguage/ChangeLanguage";

if (process.env.NODE_ENV === "development") {
  void import("./mocks/browser").then(({ worker }) => {
    worker.start();
  });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<ChangeLanguage />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
