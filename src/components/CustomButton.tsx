import { Button } from "@chakra-ui/react";

interface CustomButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  value: string;
  variant: string;
}

function CustomButton({ type, value, variant }: CustomButtonProps) {
  return (
    <Button type={type} fontSize="1rem" fontWeight="bold" bg={variant}>
      {value}
    </Button>
  );
}

export default CustomButton;
