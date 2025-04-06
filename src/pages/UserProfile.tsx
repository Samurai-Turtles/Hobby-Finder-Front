import Tag from "@/components/buttons/tag/tag";
import Frame from "@/components/layout/frame";
import { formatarData } from "@/utils/formatData";
import {
  Avatar,
  createListCollection,
  Flex,
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  Text,
} from "@chakra-ui/react";
import { CaretDown, CaretLeft, PencilLine, User } from "@phosphor-icons/react";
import NavigationButton from "../components/buttons/navigation-button";
import EventCard from "../components/cards/EventCard";
import leafLet from "leaflet";

import api from "@/api/axiosConfig";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { eventService } from "@/service/eventService";
import { EventCardInterface } from "./HomePage";
import { Link } from "react-router-dom";

type User = {
  fullName: string;
  username: string;
  bio: string;
  interests: string[];
};

interface UserEvents extends EventCardInterface {
  userSituation: string;
}

function PerfilUsuario() {
  const eventsFilter = createListCollection({
    items: [
      { label: "Criados por mim", value: "CRIADOR" },
      { label: "Sou organizador", value: "ADM" },
      { label: "Sou participante", value: "PARTICIPANTE_CONFIRMADO" },
    ],
  });
  const [user, setUser] = useState<User>();
  const [tags, setTags] = useState<string[]>([]);
  const [eventos, setEventos] = useState<UserEvents[]>([]);
  const [coordenadaAtual, setCoordenadaAtual] = useState({
    origemLat: 0,
    origemLon: 0,
  });
  const [statusSelecionado, setStatusSelecionado] = useState("CRIADOR");

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

  useEffect(() => {
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

    const fetchUserData = async (userId: any) => {
      try {
        const response = await api.get(`/user/${userId}`);
        setUser({
          fullName: response.data.fullName,
          username: response.data.username,
          bio: response.data.bio,
          interests: response.data.interests,
        });
        const filteredTags = tags.filter(
          (tag) => !tag.includes(response.data.interests),
        );
        setTags(filteredTags);
      } catch (error) {
        console.error("Erro ao buscar usuário", error);
      }
    };

    const getUserSituation = async (eventId: string) => {
      const response = await eventService.getUserSituation(eventId);
      return response?.data.situation;
    };

    const carregarEventos = async () => {
      const data = await eventService.getEvents({
        latitude: coordenadaAtual.origemLat,
        longitude: coordenadaAtual.origemLon,
      });

      const eventosMapeados: UserEvents[] = await Promise.all(
        data.content.map(async (evento: any) => ({
          userSituation: await getUserSituation(evento.id),
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
        })),
      );

      setEventos(eventosMapeados);
    };

    // Exemplo de uso (chamando a função com o ID do usuário)
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      fetchUserData(decoded.sub); // Se "sub" for o ID do usuário
      carregarEventos();
    }

    eventService.getPossibleTags().then((e) => setTags(e));
  }, []);

  return (
    <Frame>
      <Flex alignItems="center" justifyContent="space-between">
        <NavigationButton Icon={CaretLeft} label="Voltar" />
        <NavigationButton
          Icon={PencilLine}
          path="/profile/edit"
          label="Editar"
        />
      </Flex>
      <Flex direction="column" alignItems="center" gap={2}>
        <Avatar.Root minW="8rem" minH="8rem">
          <Avatar.Fallback name="Username" />
          <Avatar.Image src="#" />
        </Avatar.Root>
        <Text fontSize="xl" fontWeight="bold">
          {user?.fullName}
        </Text>
        <Text>@{user?.username}</Text>
        <Text>{user?.bio}</Text>
        <Flex gap={2} justifyContent="center" wrap="wrap">
          {user?.interests.map((e, index) => {
            return <Tag key={index} label={e} style="solid" disabled />;
          })}
        </Flex>
        <Flex
          minW="100%"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
          mb={2}
          md={{ mb: 0 }}
        >
          <Text fontSize="lg" fontWeight="bold">
            Meus Eventos
          </Text>
          <SelectRoot
            position="relative"
            variant="subtle"
            collection={eventsFilter}
            width="150px"
            minH="100%"
            alignItems="center"
            onValueChange={(selected) =>
              setStatusSelecionado(selected.value[0])
            }
          >
            <SelectTrigger
              fontSize="0.8rem"
              rounded="full"
              bg="customOrange"
              color="customWhite"
              minH="100%"
              py={1}
              px="0.5rem"
            >
              <SelectValueText placeholder="Criados por mim" />
              <CaretDown size="1rem" />
            </SelectTrigger>
            <SelectContent position="absolute" top="2rem">
              {eventsFilter.items.map((movie) => (
                <SelectItem width="140px" item={movie} key={movie.value}>
                  {movie.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        </Flex>
        <Flex width="full" direction="column" gap={5}>
          {eventos
            .filter((e) => e.userSituation.includes(statusSelecionado))
            .map((e: EventCardInterface) => (
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
            ))}
        </Flex>
      </Flex>
    </Frame>
  );
}

export default PerfilUsuario;
