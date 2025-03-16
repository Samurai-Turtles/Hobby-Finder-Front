import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { Box, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Recovery from "./pages/recovery";
import HomePage from "./pages/HomePage";
import PerfilUsuario from "./pages/PerfilUsuario";
import EditarPerfil from "./pages/EditarPerfil";
import NotificationScreen from "./pages/NotificationScreen";
import Participants from "./pages/Participants";
import SolicitationScreen from "./pages/SolicitationScreen";
import EventRating from "./components/EventRating";
import EventeRatingScreen from "./pages/EventRatingScreen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Header />
      <EditarPerfil />
    </Provider>
  </StrictMode>,
);
