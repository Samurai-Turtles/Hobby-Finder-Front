import Solicitation from "@/components/Solicitation";
import { Button, Container, SimpleGrid } from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";

function SolicitationScreen() {
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
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={3} marginY="5">
        <Solicitation msg="<usuário> deseja participar do evento <NomeDoEvento>" />
        <Solicitation msg="<usuário> deseja participar do evento <NomeDoEvento>" />
        <Solicitation msg="<usuário> deseja participar do evento <NomeDoEvento>" />
        <Solicitation msg="<usuário> deseja participar do evento <NomeDoEvento>" />
        <Solicitation msg="<usuário> deseja participar do evento <NomeDoEvento>" />
      </SimpleGrid>
    </Container>
  );
}

export default SolicitationScreen;
