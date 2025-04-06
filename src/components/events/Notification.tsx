import { Avatar, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import ActionButton from "../buttons/action-button";
import api from "@/api/axiosConfig";

interface NotificationProps {
  imgSrc?: string | undefined;
  msg: string;
  notificationType: string;
  eventId: string;
  solicitationId: string;
}

function Notification({
  imgSrc,
  msg,
  eventId,
  solicitationId,
}: NotificationProps) {
  const acceptSolicitation = async () => {
    try {
      api.put(`/event/${eventId}/request/${solicitationId}`, null);
      console.log("Solicitação aceita com sucesso.");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao aceitar solicitação:", error);
    }
  };

  const rejectSolicitation = async () => {
    try {
      await api.delete(`/event/${eventId}/request/${solicitationId}`);
      console.log("Solicitação rejeitada com sucesso.");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao rejeitar solicitação:", error);
    }
  };

  const showButtons = msg.includes("deseja participar no evento");

  return (
    <HStack gap="4" alignItems="center">
      <Avatar.Root size="xl">
        <Avatar.Fallback />
        <Avatar.Image src={imgSrc} />
      </Avatar.Root>
      <Stack gap="2">
        <Text color="fg.muted" textStyle="sm">
          {msg}
        </Text>
        {showButtons && (
          <Flex gap="2">
            <ActionButton
              label="Aceitar"
              size="xs"
              action={acceptSolicitation}
            />
            <ActionButton
              label="Rejeitar"
              size="xs"
              buttonStyle="outline"
              action={rejectSolicitation}
            />
          </Flex>
        )}
      </Stack>
    </HStack>
  );
}

export default Notification;
