import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import Participants from "./Participants";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Participants />
    </Provider>
  </StrictMode>,
);
