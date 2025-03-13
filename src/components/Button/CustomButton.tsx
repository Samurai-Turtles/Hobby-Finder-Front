import { Button, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { customButtonRecipe } from "./CustomButton.recipe";
import { useRecipe } from "@chakra-ui/react";

interface CustomButtonProps {
  children: ReactNode;
  visual: "solid" | "outline";
}

function CustomButton({ children, visual }: CustomButtonProps) {
  const recipe = useRecipe({ recipe: customButtonRecipe });
  const styleSolid = recipe({ visual });
  return (
    <Button css={styleSolid} rounded="md" gap="0" size="xs" px="4">
      <Flex width="full" justifyContent="center">
        {children}
      </Flex>
    </Button>
  );
}

export default CustomButton;
