import React from "react";
import ReactDOM from "react-dom/client";
import GlobalFonts from "./fonts/fonts";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <GlobalFonts />
  </React.StrictMode>
);
