import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/Assets/main.scss";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
