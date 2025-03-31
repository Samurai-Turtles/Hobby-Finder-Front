import Frame from "@/components/layout/frame";
import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { Plus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tag from "../components/buttons/tag/tag";
import EventCard from "../components/cards/EventCard";
import SearchBar from "../components/layout/searchbar";
import { formatarData } from "../utils/formatData";
import { getMockTags } from "../utils/mockDatas";
import { eventService } from "@/service/eventService";
import leafLet from "leaflet";

interface EventCardInterface {
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

interface CustomTagInterface {
  nome: string;
  visual: "solid" | "outline";
}

function HomePage() {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState<EventCardInterface[]>([]);
  const [tags, setTags] = useState<CustomTagInterface[]>([]);
  const [coordenadaAtual, setCoordenadaAtual] = useState<{
    origemLat: number | null;
    origemLon: number | null;
  }>({
    origemLat: null,
    origemLon: null,
  });

  // Calcula a distância (em quilômetros) da localização atual até a localização do evento
  const calcularDistancia = (destinoLat: number, destinoLon: number) => {
    if (
      coordenadaAtual.origemLat === null ||
      coordenadaAtual.origemLon === null
    ) {
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

  useEffect(() => {
    const carregarTags = async () => {
      const data = await getMockTags();
      const tagList: CustomTagInterface[] = data.map((e) => ({
        nome: e.toString(),
        visual: "outline",
      }));
      setTags(tagList);
    };

    const carregarEventos = async () => {
      const data = await eventService.getEvents({ latitude: 0, longitude: 0 });
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

    carregarTags();
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
        <SearchBar placeholder="Buscar evento" />
        {/* <Flex gap={2} wrap="wrap">
          {tags.map((e, index) => {
            return <Tag key={index} label={`#${e.nome}`} style={e.visual} />;
          })}
        </Flex> */}
        <Heading textStyle="2xl">Próximos Eventos</Heading>
        <Flex maxW="90vw" direction="column" gap={5}>
          {eventos.map((e: EventCardInterface) => {
            return (
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
            );
          })}
        </Flex>
      </Flex>
    </Frame>
  );
}

export default HomePage;
