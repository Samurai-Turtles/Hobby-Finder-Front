import { Avatar, Stack, HStack, Text, Flex } from "@chakra-ui/react";
import CustomButton from "./buttons/SolicitationDecisionButton/SolicitationDecisionButton";

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
            <CustomButton visual="solid">Aceitar</CustomButton>
            <CustomButton visual="outline">Rejeitar</CustomButton>
          </Flex>
        )}
      </Stack>
    </HStack>
  );
}

export default Notification;
