import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
//import Login from "./components/pages/login/login";
//import Signup from "./components/pages/signup/signup"

import "@fontsource/pacifico/400.css";
import "@fontsource/inter/400.css";
import Recovery from "./components/pages/recovery/recovery";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Recovery />
      {/* <Signup />
       <Login /> */}
    </Provider>
  </StrictMode>,
);
