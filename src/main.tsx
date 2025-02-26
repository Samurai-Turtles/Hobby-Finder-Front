import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>I'm a teapot!</h1>
  </StrictMode>
);
