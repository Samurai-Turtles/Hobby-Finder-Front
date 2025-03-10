import { Button } from "@chakra-ui/react";

interface CustomButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  value: string;
  variant: string;
  onClick?: (e: any) => void;
}

function CustomButton({ type, value, variant, onClick }: CustomButtonProps) {
  return (
    <Button
      type={type}
      fontSize="1rem"
      fontWeight="bold"
      bg={variant}
      md={{ minW: "300px" }}
      onClick={onClick}
    >
      {value}
    </Button>
  );
}

export default CustomButton;
