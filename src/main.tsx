import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { Box } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Box bg="orange">
        <h1>I'm a teapot!</h1>
      </Box>
    </Provider>
  </StrictMode>,
);
