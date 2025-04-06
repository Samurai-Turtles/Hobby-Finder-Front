import Frame from "@/components/layout/frame";
import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { Plus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EventCard from "../components/cards/EventCard";
import SearchBar from "../components/layout/searchbar";
import { formatarData } from "../utils/formatData";
import { eventService } from "@/service/eventService";
import leafLet from "leaflet";
import { jwtDecode } from "jwt-decode";
import api from "@/api/axiosConfig";
import Tag from "@/components/buttons/tag/tag";

export interface EventCardInterface {
  id: string;
  name: string;
  begin: string;
  end: string;
  local: {
    street: string;
    district: string;
    number: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
  };
  privacy: string;
  description: string;
}

function HomePage() {
  const navigate = useNavigate();
  const [coordenadaAtual, setCoordenadaAtual] = useState({
    origemLat: 0,
    origemLon: 0,
  });
  const [searchValue, setSearchValue] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [eventos, setEventos] = useState<EventCardInterface[]>([]);

  // Calcula a distância (em quilômetros) da localização atual até a localização do evento
  const calcularDistancia = (destinoLat: number, destinoLon: number) => {
    if (coordenadaAtual.origemLat === 0 || coordenadaAtual.origemLon === 0) {
      return "Calculando...";
    }
    const minhaLocalizacao = leafLet.latLng(
      coordenadaAtual.origemLat,
      coordenadaAtual.origemLon,
    );
    const destino = leafLet.latLng(destinoLat, destinoLon);
    const distancia = minhaLocalizacao.distanceTo(destino);
    return (distancia / 1000).toFixed(2);
  };

  const carregarEventos = async () => {
    const data = await eventService.getEvents({
      latitude: coordenadaAtual.origemLat,
      longitude: coordenadaAtual.origemLon,
      name: searchValue,
    });
    const eventosMapeados: EventCardInterface[] = data.content.map(
      (evento: any) => ({
        id: evento.id,
        name: evento.Name,
        begin: evento.begin,
        end: evento.end,
        local: {
          street: evento.local.street,
          district: evento.local.district,
          number: evento.local.number,
          city: evento.local.city,
          state: evento.local.state,
          longitude: evento.local.longitude,
          latitude: evento.local.latitude,
        },
        privacy: evento.privacy,
        description: evento.description,
      }),
    );
    setEventos(eventosMapeados);
  };

  useEffect(() => {
    const carregarTags = async (userId: string) => {
      try {
        const response = await api.get(`/user/${userId}`);
        setTags(response.data.interests);
      } catch (error) {
        console.error("Erro ao buscar tags do usuário", error);
      }
    };

    // Obtém a localização do usuário
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoordenadaAtual({
          origemLat: latitude,
          origemLon: longitude,
        });
      },
      (error) => {
        console.error("Erro ao obter localização:", error);
      },
    );

    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.sub) {
        carregarTags(decoded.sub);
      }
    }

    carregarEventos();
  }, []);

  return (
    <Frame>
      <IconButton
        padding={0}
        rounded="lg"
        bg="customOrange"
        position="fixed"
        top="90vh"
        right="7vw"
        transform="scale(1.2)"
        zIndex="1"
        onClick={() => navigate("/create-event")}
      >
        <Plus size={32} />
      </IconButton>

      <Flex direction="column" gap={5}>
        <SearchBar
          placeholder="Buscar evento"
          value={searchValue}
          setValue={setSearchValue}
          action={carregarEventos}
        />
        <Flex gap={2} direction="column">
          <Flex alignItems="center" gap={2} wrap="wrap" maxW="1200px">
            {tags.map((e, index) => {
              return <Tag key={index} label={e} style="solid" disabled />;
            })}
          </Flex>
        </Flex>
        <Heading textStyle="2xl">Próximos Eventos</Heading>
        <Flex maxW="90vw" direction="column" gap={5}>
          {eventos.map((e: EventCardInterface) => {
            return (
              <Link key={e.id} to={`/event/${e.id}`}>
                <EventCard
                  key={e.id}
                  imgSrc="https://images.unsplash.com/photo-1454908027598-28c44b1716c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  nomeEvento={e.name}
                  descricao={e.description}
                  localizacao={`${e.local.street}, ${e.local.district}, ${e.local.city} - ${e.local.state}`}
                  distancia={`${calcularDistancia(e.local.latitude, e.local.longitude)}`}
                  dataInicial={formatarData(e.begin)}
                  dataFinal={formatarData(e.end)}
                  privacidade={e.privacy}
                />
              </Link>
            );
          })}
        </Flex>
      </Flex>
    </Frame>
  );
}

export default HomePage;
