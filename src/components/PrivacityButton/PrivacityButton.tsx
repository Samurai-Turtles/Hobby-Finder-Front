"use client";

import { Box, Flex, Text, useRecipe } from "@chakra-ui/react";
import { privacityButtonRecipe } from "./PrivacityButton.recipe";
import { LockSimple, LockSimpleOpen } from "@phosphor-icons/react";

interface PrivacityButtonProps {
  privacidade: string;
}

function PrivacityButton({ privacidade }: PrivacityButtonProps) {
  const visual = privacidade.includes("PRIVADO") ? "outline" : "solid";
  const recipe = useRecipe({ recipe: privacityButtonRecipe });
  const styles = recipe({ visual });

  return (
    <Flex
      h="fit-content"
      w="fit-content"
      rounded="full"
      p={1}
      alignItems="center"
      css={styles}
    >
      {privacidade.includes("PUBLICO") ? (
        <Box p={1} bgColor="customWhite" rounded="full" color="customOrange">
          <LockSimpleOpen size={16} />
        </Box>
      ) : (
        <Box p={1} bgColor="customOrange" rounded="full" color="customWhite">
          <LockSimple size={16} />
        </Box>
      )}
      <Text px={1}>{privacidade}</Text>
    </Flex>
  );
}

export default PrivacityButton;
