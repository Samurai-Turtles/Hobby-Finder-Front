import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FrameProps {
  children: ReactNode;
}

function Frame({ children }: FrameProps) {
  return (
    <Container maxW={"1200px"} py={4}>
      {children}
    </Container>
  );
}

export default Frame;
