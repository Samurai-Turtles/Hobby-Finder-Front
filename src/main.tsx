import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import EditarPerfil from "./EditarPerfil";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <EditarPerfil />
    </Provider>
  </StrictMode>,
);
