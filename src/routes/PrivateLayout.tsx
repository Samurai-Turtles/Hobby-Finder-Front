import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header"; // Importa o Header global

function PrivateLayout() {
  return (
    <div>
      <Header /> {/* Fica fixo em todas as páginas privadas */}
      <Outlet /> {/* Aqui entra a página da rota privada */}
    </div>
  );
}

export default PrivateLayout;
