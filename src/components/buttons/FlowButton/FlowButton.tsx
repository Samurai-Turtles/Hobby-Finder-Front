import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FlowButtonProps {
  children: ReactNode;
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
    >
      {children}
    </Button>
  );
}

export default FlowButton;
