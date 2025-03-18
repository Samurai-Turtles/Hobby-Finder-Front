import { Button, Text } from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";
import { ReactNode } from "react";

interface FlowButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

function FlowButton({ children }: FlowButtonProps) {
  return (
    <Button
      bg="customOrange"
      gap={0}
      rounded="xl"
      fontWeight="bold"
      fontSize="md"
      px={2}
      // Definir posteriormente com react router
      // onClick={}
    >
      {children || (
        <>
          <CaretLeft size={32} />
          <Text>Voltar</Text>
        </>
      )}
    </Button>
  );
}

export default FlowButton;
