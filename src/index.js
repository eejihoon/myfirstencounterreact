import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ConfirmButton from "./chapter06/ConfirmButton";
import ConfirmButtonClassFieldsSyntax from "./chapter06/ConfirmButtonClassFieldsSyntax";
import ConfirmButtonFunction from "./chapter06/ConfirmButtonFunction";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <ConfirmButton />
    <ConfirmButtonClassFieldsSyntax />
    <ConfirmButtonFunction />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
