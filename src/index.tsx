import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import App from "./App";
import { ReduxProvider } from "./app/Provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
