import {
  Avatar,
  Container,
  createListCollection,
  Flex,
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  Text,
} from "@chakra-ui/react";
import { CaretDown, PencilLine } from "@phosphor-icons/react";
import FlowButton from "../components/buttons/FlowButton/FlowButton";
import CustomTag from "@/components/buttons/CustomTag/CustomTag";
import EventCard from "../components/cards/EventCard";
import { formatarData } from "@/utils/formatData";

function PerfilUsuario() {
  const eventsFilter = createListCollection({
    items: [
      { label: "Criados por mim", value: "Criados por mim" },
      { label: "Sou organizador", value: "Sou organizador" },
      { label: "Sou participante", value: "SOu participante" },
    ],
  });

  return (
    <Container maxWidth="90vw" py={5}>
      <Flex alignItems="center" justifyContent="space-between">
        <FlowButton />
        <FlowButton path="/profile/edit">
          <PencilLine size={32} />
          <Text ml={1}>Editar</Text>
        </FlowButton>
      </Flex>
      <Flex direction="column" alignItems="center" gap={2}>
        <Avatar.Root minW="8rem" minH="8rem">
          <Avatar.Fallback name="Username" />
          <Avatar.Image src="#" />
        </Avatar.Root>
        <Text fontSize="xl" fontWeight="bold">
          Username
        </Text>
        <Text>@Nickname</Text>
        <Text>"bio"</Text>
        <Flex gap={2} justifyContent="center" wrap="wrap">
          <CustomTag texto="tag" visual="solid" />
          <CustomTag texto="tag" visual="solid" />
          <CustomTag texto="tag" visual="solid" />
          <CustomTag texto="tag" visual="solid" />
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
    </Container>
  );
}

export default PerfilUsuario;
