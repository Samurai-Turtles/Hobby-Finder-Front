import { privacityButtonRecipe } from "@/components/buttons/privacity-button/privacity-button.recipe";
import { capitalizeFirstLetter } from "@/utils/formatData";
import { Box, Flex, Text, useRecipe } from "@chakra-ui/react";
import { LockSimple, LockSimpleOpen } from "@phosphor-icons/react";

interface PrivacyIndicatorProps {
  privacy: "PUBLIC" | "PRIVATE";
}

function PrivacyIndicator({ privacy }: PrivacyIndicatorProps) {
  const visual = privacy == "PRIVATE" ? "outline" : "solid";
  const recipe = useRecipe({ recipe: privacityButtonRecipe });
  const styles = recipe({ visual });

  return (
    <Flex
      h="fit-content"
      w="fit-content"
      rounded="full"
      p={1}
      justifyContent={"center"}
      alignItems={"center"}
      css={styles}
    >
      {privacy == "PUBLIC" ? (
        <Box p={1} bgColor="customWhite" rounded="full" color="customOrange">
          <LockSimpleOpen size={16} />
        </Box>
      ) : (
        <Box p={1} bgColor="customOrange" rounded="full" color="customWhite">
          <LockSimple size={16} />
        </Box>
      )}
      <Text px={1} fontWeight="bold" userSelect={"none"}>
        {capitalizeFirstLetter(privacy == "PUBLIC" ? "PÚBLICO" : "PRIVADO")}
      </Text>
    </Flex>
  );
}

export default PrivacyIndicator;
