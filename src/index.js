import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const appContainer = document.getElementById("root");
const root = ReactDOM.createRoot(appContainer);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
