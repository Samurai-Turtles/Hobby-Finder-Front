import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { Box } from "@chakra-ui/react";
import EventeRatingScreen from "./pages/EventRatingScreen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <EventeRatingScreen />
    </Provider>
  </StrictMode>,
);
