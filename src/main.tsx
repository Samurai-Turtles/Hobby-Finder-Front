import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import HomePage from "./HomePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <HomePage />
    </Provider>
  </StrictMode>,
);
