import { Avatar, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import ActionButton from "../buttons/action-button";
import api from "@/api/axiosConfig";

interface SolicitationProps {
  msg: string;
  imgSrc?: string | undefined;
  eventId: string;
  requestId: string;
}

function Solicitation({ msg, imgSrc, eventId, requestId }: SolicitationProps) {
  const acceptSolicitation = async () => {
    try {
      api.put(`/event/${eventId}/request/${requestId}`, null);
    } catch (error) {
      console.error("Erro ao aceitar solicitações:", error);
    }
  };

  const rejectSolicitation = async () => {
    try {
      api.delete(`/event/${eventId}/request/${requestId}`);
    } catch (error) {
      console.error("Erro ao rejeitar solicitações:", error);
    }
  };
  return (
    <HStack gap="4" alignItems="center">
      <Avatar.Root size="xl">
        <Avatar.Fallback />
        <Avatar.Image src={imgSrc} />
      </Avatar.Root>
      <Stack gap="2">
        <Text textStyle="sm">{msg}</Text>

        <Flex gap="2">
          <ActionButton label="Aceitar" size="xs" action={acceptSolicitation} />
          <ActionButton
            label="Rejeitar"
            size="xs"
            buttonStyle="outline"
            action={rejectSolicitation}
          />
        </Flex>
      </Stack>
    </HStack>
  );
}

export default Solicitation;
