import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MyProvider } from "./components/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyProvider>,
);
