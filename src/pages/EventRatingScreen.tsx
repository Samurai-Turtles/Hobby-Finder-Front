import EventRating from "@/components/EventRating";
import { Button, Container, VStack } from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";

function EventeRatingScreen() {
  return (
    <Container maxWidth="90vw" paddingY="5">
      <Button
        bg="customOrange"
        color="customWhite"
        rounded="md"
        gap="0"
        paddingLeft="2"
      >
        <CaretLeft size={32} />
        Voltar
      </Button>
      <VStack alignItems="left" marginY="5" gap={5}>
        <EventRating
          username="Fulano_da_silva_peixoto"
          rating={3}
          comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          imgSrc={""}
        />
        <EventRating
          username="Fulano_da_silva_peixoto"
          rating={3}
          comment="Evento incrível e etc, lorem ipsum asnasniansjajsjaosoaos"
          imgSrc={""}
        />
        <EventRating
          username="Fulano_da_silva_peixoto"
          rating={1}
          comment="Evento incrível e etc, lorem ipsum asnasniansjajsjaosoaos"
          imgSrc={""}
        />
        <EventRating
          username="Fulano_da_silva_peixoto"
          rating={5}
          comment="Evento incrível e etc, lorem ipsum asnasniansjajsjaosoaos"
          imgSrc={""}
        />
      </VStack>
    </Container>
  );
}

export default EventeRatingScreen;
