import React from "react";
import { createRoot } from "react-dom/client";
import "./global.css"; // <- importa o CSS do Tailwind
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
