import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
//import { Box, Container } from "@chakra-ui/react";
import Header from "./components/layout/Header/Header";
import PrivateEventView from "./pages/PrivateEventView";
//import Login from "./pages/Login";
//import SignUp from "./pages/SignUp";
//import Recovery from "./pages/Recovery";
//import HomePage from "./pages/HomePage";
//import UserProfile from "./pages/UserProfile";
//import EditUserProfile from "./pages/EditUserProfile";
//import Notifications from "./pages/Notifications";
//import Participants from "./pages/Participants";
//import Solicitations from "./pages/Solicitations";
//import EventRatings from "./pages/EventRatings";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider defaultTheme="light">
      <Header />
      <PrivateEventView />
    </Provider>
  </StrictMode>,
);
