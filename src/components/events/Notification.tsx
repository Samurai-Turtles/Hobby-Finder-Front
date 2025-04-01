import { Avatar, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import ActionButton from "../buttons/action-button";

interface NotificationProps {
  imgSrc?: string | undefined;
  msg: string;
  isSolicitation?: boolean;
  eventId: string;
  participationId: string;
}

function Notification({
  imgSrc,
  msg,
  isSolicitation,
  eventId,
  participationId,
}: NotificationProps) {
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
        {isSolicitation && (
          <Flex gap="2">
            <ActionButton
              label="Aceitar"
              size="xs"
              eventId={eventId}
              participationId={participationId}
              status="CONFIRMED_PRESENCE"
            />
            <ActionButton
              label="Rejeitar"
              size="xs"
              buttonStyle="outline"
              eventId={eventId}
              participationId={participationId}
              status="UNCONFIRMED_PRESENCE"
            />
          </Flex>
        )}
      </Stack>
    </HStack>
  );
}

export default Notification;
