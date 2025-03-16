import { Avatar, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import CustomButton from "./buttons/SolicitationDecisionButton/SolicitationDecisionButton";

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
        <Text color="customWhite" textStyle="sm">
          {msg}
        </Text>

        <Flex gap="2">
          <CustomButton visual="solid">Aceitar</CustomButton>
          <CustomButton visual="outline">Rejeitar</CustomButton>
        </Flex>
      </Stack>
    </HStack>
  );
}

export default Solicitation;
