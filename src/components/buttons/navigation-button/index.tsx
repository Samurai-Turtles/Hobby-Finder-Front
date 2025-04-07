import { Button } from "@chakra-ui/react";
import { Icon as ChakraIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { navigationButtonStyle } from "./navigation-button.style";

interface NavigationButtonProps {
  path?: string;
  label: string;
  Icon: ChakraIcon;
}

function NavigationButton({ path, label, Icon }: NavigationButtonProps) {
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
    <Button css={navigationButtonStyle} onClick={handleClick}>
      <Icon size={32} />
      {label}
    </Button>
  );
}

export default NavigationButton;
