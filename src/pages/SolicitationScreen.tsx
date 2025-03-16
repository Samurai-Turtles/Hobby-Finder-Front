import FlowButton from "@/components/buttons/FlowButton/FlowButton";
import Solicitation from "@/components/Solicitation";
import { Container, SimpleGrid } from "@chakra-ui/react";

function SolicitationScreen() {
  return (
    <Container maxWidth="90vw" paddingY="5">
      <FlowButton />
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
