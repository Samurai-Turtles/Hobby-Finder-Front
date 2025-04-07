import { capitalizeFirstLetter } from "@/utils/formatData";
import { Box, Flex, Text, useRecipe } from "@chakra-ui/react";
import { LockSimple, LockSimpleOpen } from "@phosphor-icons/react";
import { privacityButtonRecipe } from "./privacity-button.recipe";

export type PrivacityStatus = "PRIVATE" | "PUBLIC";

interface PrivacityButtonProps {
  status: PrivacityStatus;
  handlePrivacyToggle: () => void;
}

function PrivacityButton({
  status,
  handlePrivacyToggle,
}: PrivacityButtonProps) {
  const visual = status == "PRIVATE" ? "outline" : "solid";
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
      onClick={handlePrivacyToggle}
    >
      {status == "PUBLIC" ? (
        <Box p={1} bgColor="customWhite" rounded="full" color="customOrange">
          <LockSimpleOpen size={16} />
        </Box>
      ) : (
        <Box p={1} bgColor="customOrange" rounded="full" color="customWhite">
          <LockSimple size={16} />
        </Box>
      )}
      <Text px={1} fontWeight="bold" userSelect={"none"}>
        {capitalizeFirstLetter(status == "PUBLIC" ? "PÚBLICO" : "PRIVADO")}
      </Text>
    </Flex>
  );
}

export default PrivacityButton;
