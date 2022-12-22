import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.scss";
import Context from "./Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Context>
    <App />
  </Context>
  // </React.StrictMode >
);
