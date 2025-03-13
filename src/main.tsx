import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { Box } from "@chakra-ui/react";
import SolicitationScreen from "./pages/SolicitationScreen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <SolicitationScreen />
    </Provider>
  </StrictMode>,
);
