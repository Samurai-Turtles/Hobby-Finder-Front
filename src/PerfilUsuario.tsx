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
import { CaretDown, CaretLeft, PencilLine } from "@phosphor-icons/react";
import FlowButton from "./components/Buttons/FlowButton";

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
        <FlowButton>
          <CaretLeft size={32} />
          <Text>Voltar</Text>
        </FlowButton>
        <FlowButton>
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
        <Text>LEMBRAR DE POR AS TAGS</Text>
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
        <Text>ADICIONAR COMPONENTES DE EVENTOS</Text>
      </Flex>
    </Container>
  );
}

export default PerfilUsuario;
