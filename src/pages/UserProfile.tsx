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

import api from "@/api/axiosConfig";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { eventService } from "@/service/eventService";

type User = {
  fullName: string;
  username: string;
  bio: string;
  interests: string[];
};

function PerfilUsuario() {
  const eventsFilter = createListCollection({
    items: [
      { label: "Criados por mim", value: "Criados por mim" },
      { label: "Sou organizador", value: "Sou organizador" },
      { label: "Sou participante", value: "SOu participante" },
    ],
  });
  const [user, setUser] = useState<User>();
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
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

    // Exemplo de uso (chamando a função com o ID do usuário)
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      fetchUserData(decoded.sub); // Se "sub" for o ID do usuário
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
        <Flex direction="column" gap={5}>
          <EventCard
            imgSrc="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            nomeEvento="Alok no Parque do Povo"
            descricao="O Alok no Parque do Povo foi um evento de grande destaque realizado em Campina Grande, onde o DJ e produtor musical Alok se apresentou ao vivo. Conhecido por seus hits internacionais e estilo de música eletrônica, Alok atraiu milhares de fãs para o Parque do Povo, um dos principais pontos turísticos da cidade. O evento proporcionou uma experiência única, com performances energéticas e a presença de um público diverso, celebrando a música e a cultura em uma grande festa ao ar livre."
            localizacao="Parque do Povo, Campina Grande, Paraíba"
            distancia={"4.2"}
            dataInicial={formatarData("2022-10-31T01:00:00.594Z")}
            dataFinal={formatarData("2022-10-31T02:00:00.594Z")}
            privacidade={"PUBLIC"}
          />
        </Flex>
      </Flex>
    </Frame>
  );
}

export default PerfilUsuario;
