import NavigationButton from "@/components/buttons/navigation-button";
import Solicitation from "@/components/events/Solicitation";
import Frame from "@/components/layout/frame";
import { SimpleGrid } from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import api from "@/api/axiosConfig";
import { useParams } from "react-router-dom";

interface SolicitationData {
  id: string;
  usuario: Usuario;
}

interface Usuario {
  id: string;
  usuario: string;
  bio: string;
}

function Solicitations() {
  const [solicitations, setSolicitations] = useState<SolicitationData[]>([]);
  const { eventId } = useParams<{ eventId: string }>();

  useEffect(() => {
    const fetchSolicitations = async () => {
      try {
        const response = await api.get(`/event/${eventId}/request`);
        const data = response.data.content;
        setSolicitations(data);
      } catch (error) {
        console.error("Erro ao carregar solicitações:", error);
      }
    };

    fetchSolicitations();
  }, [eventId]);

  return (
    <Frame>
      <NavigationButton Icon={CaretLeft} label="Voltar" />
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={3} marginY="5">
        {solicitations.map((solicitation) => (
          <Solicitation
            key={solicitation.id}
            msg={`Solicitação de ${solicitation.usuario.usuario}`}
            imgSrc={`https://www.example.com/avatar/${solicitation.usuario.id}`} // Altere o link para a URL real do avatar
          />
        ))}
      </SimpleGrid>
    </Frame>
  );
}

export default Solicitations;
