import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n/i18n";
import reportWebVitals from "./reportWebVitals";
import HookRefNg from "./component/Hooks/useRef/HookRefNg";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <div id="dialog"></div>
    <HookRefNg />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
