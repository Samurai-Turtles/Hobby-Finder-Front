import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import PerfilUsuario from "./PerfilUsuario";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <PerfilUsuario />
    </Provider>
  </StrictMode>,
);
