import { Participant } from "@/pages/Participants";
import { Avatar, Box, Card, CloseButton, Flex, Text } from "@chakra-ui/react";
import { Star } from "@phosphor-icons/react";
import ActionButton from "../buttons/action-button";

interface ParticipantProfileCardProps {
  display: string;
  participant: Participant;
  closeClick: (e: any) => void;
}

function ParticipantProfileCard({
  display,
  participant,
  closeClick,
}: ParticipantProfileCardProps) {
  return (
    <Box
      display={display}
      position="fixed"
      inset={0}
      zIndex="1000"
      backgroundColor="rgba(0, 0, 0, 0.1)"
    >
      <Flex justifyContent="center" alignItems="center" minH="full">
        <Card.Root maxW="350px">
          <CloseButton position="absolute" right={0} onClick={closeClick} />
          <Card.Body paddingBottom="1.2rem" gap="2">
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
            {participant.tipo.includes("PARTICIPANTE") ? (
              <ActionButton label="Tornar Organizador" action={() => {}} />
            ) : (
              <ActionButton
                label="Remover como Organizador"
                buttonStyle="alert"
                action={() => {}}
              />
            )}
            <ActionButton
              label="Remover Participante"
              buttonStyle="alert"
              action={() => {}}
            />
          </Card.Footer>
        </Card.Root>
      </Flex>
    </Box>
  );
}

export default ParticipantProfileCard;
