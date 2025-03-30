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

type User = {
  fullName: string;
  username: string;
  bio: string;
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

  useEffect(() => {
    const fetchUserData = async (userId: any) => {
      try {
        const response = await api.get(`/user/${userId}`);
        setUser({
          fullName: response.data.fullName,
          username: response.data.username,
          bio: response.data.bio,
        });
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
          <Tag label="tag" style="solid" />
          <Tag label="tag" style="solid" />
          <Tag label="tag" style="solid" />
          <Tag label="tag" style="solid" />
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
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            nomeEvento="Nome evento"
            descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore aspernatur molestias quae consequuntur excepturi in, dolor dolores deleniti quibusdam, beatae, nostrum accusantium! Rerum saepe enim modi asperiores sit quibusdam quo.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore aspernatur molestias quae consequuntur excepturi in, dolor dolores deleniti quibusdam, beatae, nostrum accusantium! Rerum saepe enim modi asperiores sit quibusdam quo.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore aspernatur molestias quae consequuntur excepturi in, dolor dolores deleniti quibusdam, beatae, nostrum accusantium! Rerum saepe enim modi asperiores sit quibusdam quo."
            localizacao="LOCAL"
            distancia={100}
            dataInicial={formatarData("2022-10-31T09:00:00.594Z")}
            dataFinal={formatarData("2022-10-31T09:00:00.594Z")}
            privacidade="PUBLICO"
            display="flex"
          />
        </Flex>
      </Flex>
    </Frame>
  );
}

export default PerfilUsuario;
