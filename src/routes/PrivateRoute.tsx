import { Navigate, Outlet } from "react-router";

// Função para verificar se o usuário está autenticado
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

// Componente de Rota Privada
export function PrivateRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
}
