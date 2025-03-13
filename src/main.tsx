import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { Box } from "@chakra-ui/react";
import NotificationScreen from "./page/NotificationScreen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <NotificationScreen />
    </Provider>
  </StrictMode>,
);
