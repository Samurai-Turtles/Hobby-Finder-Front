import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import Signup from "@/pages/SignUp";
import Recovery from "@/pages/Recovery";
import HomePage from "@/pages/HomePage";
import Notifications from "@/pages/Notifications";
import UserProfile from "@/pages/UserProfile";
import EditUserProfile from "@/pages/EditUserProfile";
import { PrivateRoute } from "./PrivateRoute";
import CreateEvent from "@/pages/CreateEvent";
import PrivateLayout from "./PrivateLayout";
import EventRatings from "@/pages/EventRatings";
import Solicitations from "@/pages/Solicitations";
import EventViewID from "@/pages/EventViewID";
import Participants from "@/pages/Participants";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas (Acessíveis sem login) */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="recovery" element={<Recovery />} />

        {/* Rotas Privadas (Apenas para usuários autenticados) */}
        {/* ABAIXO ESTÁ COMENTADO SÓ PARA TESTAR O FLUXO DE TELAS (DESCOMENTAR DEPOIS) */}
        <Route element={<PrivateRoute />}>
          <Route element={<PrivateLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="profile/edit" element={<EditUserProfile />} />

            {/* 
                          A DEFINIR AQUI A RELAÇÃO DAS 9 TELAS DE VISUALIZAÇÃO DE EVENTO
                      */}
            <Route path="create-event" element={<CreateEvent />} />
            <Route path="event/:eventId" element={<EventViewID />} />
            <Route path="event/:eventId/ratings" element={<EventRatings />} />
            <Route
              path="event/:eventId/solicitations"
              element={<Solicitations />}
            />
            <Route
              path="event/:eventId/participants"
              element={<Participants />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
