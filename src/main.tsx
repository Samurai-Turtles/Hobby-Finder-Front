import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { Box, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Recovery from "./pages/Recovery";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import EditUserProfile from "./pages/EditUserProfile";
import NotificationScreen from "./pages/NotificationScreen";
import Participants from "./pages/Participants";
import SolicitationScreen from "./pages/SolicitationScreen";
import EventeRatingScreen from "./pages/EventRatingScreen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Header />
      <EditUserProfile />
    </Provider>
  </StrictMode>,
);
