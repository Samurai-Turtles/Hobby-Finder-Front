import FlowButton from "@/components/buttons/FlowButton/FlowButton";
import Solicitation from "@/components/events/Solicitation";
import Frame from "@/components/layout/frame";
import { SimpleGrid } from "@chakra-ui/react";

function Solicitations() {
  return (
    <Frame>
      <FlowButton />
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={3} marginY="5">
        <Solicitation msg="<usuário> deseja participar do evento <NomeDoEvento>" />
        <Solicitation msg="<usuário> deseja participar do evento <NomeDoEvento>" />
        <Solicitation msg="<usuário> deseja participar do evento <NomeDoEvento>" />
        <Solicitation msg="<usuário> deseja participar do evento <NomeDoEvento>" />
        <Solicitation msg="<usuário> deseja participar do evento <NomeDoEvento>" />
      </SimpleGrid>
    </Frame>
  );
}

export default Solicitations;
