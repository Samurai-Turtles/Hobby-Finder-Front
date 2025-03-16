import {
  Avatar,
  Box,
  Button,
  Card,
  CloseButton,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Star } from "@phosphor-icons/react";
import { Participant } from "@/pages/Participants";

interface CardParticipanteProps {
  display: string;
  participant: Participant;
  closeClick: (e: any) => void;
}

function CardParticipante({
  display,
  participant,
  closeClick,
}: CardParticipanteProps) {
  return (
    <Box
      display={display}
      position="fixed"
      inset={0}
      zIndex="1000"
      backgroundColor="rgba(0, 0, 0, 0.1)"
    >
      <Flex justifyContent="center" alignItems="center" minH="full">
        <Card.Root maxW="320px">
          <CloseButton position="absolute" right={0} onClick={closeClick} />
          <Card.Body gap="2">
            <Avatar.Root alignSelf="center" size="2xl">
              <Avatar.Image src={participant.srcImgProfile} />
              <Avatar.Fallback name={participant.nickname} />
            </Avatar.Root>
            <Card.Title textAlign="center">{participant.nickname}</Card.Title>
            <Flex justifyContent="center" gap={1}>
              <Text>{participant.avaliacao}/5</Text>
              <Text color="customOrange">
                <Star size={20} weight="fill" />
              </Text>
            </Flex>
            <Card.Description>{participant.bio}</Card.Description>
          </Card.Body>
          <Card.Footer flexDirection="column">
            <Text>TROCAR ESSES BOTÕES PARA COMPONENTES APÓS INTEGRAÇÃO</Text>
            <Button>
              {participant.tipo.includes("PARTICIPANTE") ? (
                <Text>Tornar Organizador</Text>
              ) : (
                <Text>Remover Como Organizador</Text>
              )}
            </Button>
            <Button>Remover Participante</Button>
          </Card.Footer>
        </Card.Root>
      </Flex>
    </Box>
  );
}

export default CardParticipante;
