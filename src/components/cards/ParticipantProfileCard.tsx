import { Participant } from "@/pages/Participants";
import { Avatar, Box, Card, CloseButton, Flex, Text } from "@chakra-ui/react";
import { Star } from "@phosphor-icons/react";
import ActionButton from "../buttons/action-button";
import api from "@/api/axiosConfig";

interface ParticipantProfileCardProps {
  idEvent: string;
  display: string;
  participant: Participant;
  closeClick: (e: any) => void;
}

function ParticipantProfileCard({
  idEvent,
  display,
  participant,
  closeClick,
}: ParticipantProfileCardProps) {
  const handleConvertToOrganizer = async () => {
    try {
      await api.put(
        `/event/${idEvent}/participation/${participant.participationId}/update-presence`,
        {
          participation: participant.participationStatus,
          position: "ADMIN",
        },
      );
      window.location.reload();
    } catch (error) {
      console.log(
        `Erro ao tornar participante organizador (ID: ${participant.id})`,
      );
    }
  };

  const handleConvertToParticipant = async () => {
    try {
      await api.put(
        `/event/${idEvent}/participation/${participant.participationId}/update-presence`,
        {
          participation: participant.participationStatus,
          position: "PARTICIPANT",
        },
      );
      window.location.reload();
    } catch (error) {
      console.log(
        `Erro ao tornar organizador participante (ID: ${participant.id})`,
      );
    }
  };

  const handleRemoveParticipant = async () => {
    try {
      await api.delete(
        `/event/${idEvent}/participation/${participant.participationId}`,
      );
      window.location.reload();
    } catch (error) {
      console.log(`Erro ao remover participante (ID: ${participant.id})`);
    }
  };

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
              <Avatar.Fallback name={participant.participantData.username} />
            </Avatar.Root>
            <Card.Title textAlign="center">
              {participant.participantData.username}
            </Card.Title>
            <Flex justifyContent="center" gap={1}>
              <Text>{participant.participantData.avaliacao}/5</Text>
              <Text color="customOrange">
                <Star size={20} weight="fill" />
              </Text>
            </Flex>
            <Card.Description>
              {participant.participantData.bio}
            </Card.Description>
          </Card.Body>
          <Card.Footer flexDirection="column">
            {participant.situation.includes("PARTICIPANTE_CONFIRMADO") ? (
              <ActionButton
                label="Tornar Organizador"
                action={handleConvertToOrganizer}
                w="full"
              />
            ) : (
              <ActionButton
                label="Remover como Organizador"
                buttonStyle="alert"
                action={handleConvertToParticipant}
                w="full"
              />
            )}
            <ActionButton
              label="Remover Participante"
              buttonStyle="alert"
              action={handleRemoveParticipant}
              w="full"
            />
          </Card.Footer>
        </Card.Root>
      </Flex>
    </Box>
  );
}

export default ParticipantProfileCard;
