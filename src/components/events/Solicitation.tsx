import { Avatar, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import ActionButton from "../buttons/action-button";

interface SolicitationProps {
  msg: string;
  imgSrc?: string | undefined;
}

function Solicitation({ msg, imgSrc }: SolicitationProps) {
  return (
    <HStack gap="4" alignItems="center">
      <Avatar.Root size="xl">
        <Avatar.Fallback />
        <Avatar.Image src={imgSrc} />
      </Avatar.Root>
      <Stack gap="2">
        <Text textStyle="sm">{msg}</Text>

        <Flex gap="2">
          <ActionButton label="Aceitar" size="xs" action={() => {}} />
          <ActionButton
            label="Rejeitar"
            size="xs"
            buttonStyle="outline"
            action={() => {}}
          />
        </Flex>
      </Stack>
    </HStack>
  );
}

export default Solicitation;
