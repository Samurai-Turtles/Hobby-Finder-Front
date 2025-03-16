import { Button, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { solicitationDecisionButton } from "./SolicitationDecisionButton.recipe";
import { useRecipe } from "@chakra-ui/react";

interface SolicitationDecisionButtonProps {
  children: ReactNode;
  visual: "solid" | "outline";
}

function SolicitationDecisionButton({
  children,
  visual,
}: SolicitationDecisionButtonProps) {
  const recipe = useRecipe({ recipe: solicitationDecisionButton });
  const styleSolid = recipe({ visual });
  return (
    <Button css={styleSolid} rounded="md" gap="0" size="xs" px="4">
      <Flex width="full" justifyContent="center">
        {children}
      </Flex>
    </Button>
  );
}

export default SolicitationDecisionButton;
