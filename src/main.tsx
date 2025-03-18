import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { Box, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import CancelEventViewScreen from "./pages/CancelEventViewScreen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Header />
      <Container maxWidth="90vw">
        <CancelEventViewScreen />
      </Container>
    </Provider>
  </StrictMode>,
);
