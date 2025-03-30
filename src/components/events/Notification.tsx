import { Avatar, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import ActionButton from "../buttons/action-button";

interface NotificationProps {
  imgSrc?: string | undefined;
  msg: string;
  isSolicitation?: boolean;
}

function Notification({ imgSrc, msg, isSolicitation }: NotificationProps) {
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
            <ActionButton label="Aceitar" size="xs" action={() => {}} />
            <ActionButton
              label="Rejeitar"
              size="xs"
              buttonStyle="outline"
              action={() => {}}
            />
          </Flex>
        )}
      </Stack>
    </HStack>
  );
}

export default Notification;
