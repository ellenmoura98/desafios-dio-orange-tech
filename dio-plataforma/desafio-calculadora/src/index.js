import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
/* eslint-disable no-unused-vars */
import { createGlobalStyle } from "./global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <createGlobalStyle />
    <App />
  </React.StrictMode>
);
