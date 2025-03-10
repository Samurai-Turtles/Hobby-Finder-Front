import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { Box, Container } from "@chakra-ui/react";
import Header from "./components/Header";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Container maxWidth="90vw" py={5}>
        <Header />
        <Box>
          <h1>Hello Word!</h1>
        </Box>
      </Container>
    </Provider>
  </StrictMode>,
);
