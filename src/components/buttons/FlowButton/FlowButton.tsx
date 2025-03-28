import { Button, Text } from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface FlowButtonProps {
  children?: ReactNode;
  path?: string;
}

function FlowButton({ children, path }: FlowButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Se um path for fornecido, navega para esse path
    if (path) {
      navigate(path);
    } else {
      navigate(-1); // Caso contrário, volta uma tela
    }
  };

  return (
    <Button
      bg="customOrange"
      gap={0}
      rounded="xl"
      fontWeight="bold"
      fontSize="md"
      px={2}
      onClick={handleClick}
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
