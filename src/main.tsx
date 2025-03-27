import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import Header from "./components/layout/Header/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Recovery from "./pages/Recovery";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import EditUserProfile from "./pages/EditUserProfile";
import Notifications from "./pages/Notifications";
import Participants from "./pages/Participants";
import Solicitations from "./pages/Solicitations";
import EventRatings from "./pages/EventRatings";
import RatingEventCard from "./components/cards/RatingEventCard";
import LocationEventView from "./pages/LocationEventView";
import PublicEventViewScreen from "./pages/PublicEventViewScreen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider defaultTheme="light">
      <Header />
      <PublicEventViewScreen isCancel={true} />
    </Provider>
  </StrictMode>,
);
