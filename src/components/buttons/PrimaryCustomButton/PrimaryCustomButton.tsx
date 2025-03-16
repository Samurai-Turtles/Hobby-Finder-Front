import { Button } from "@chakra-ui/react";

interface PrimaryCustomButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  value: string;
  variant: "primary" | "secondary";
  onClick?: (e: any) => void;
}

function PrimaryCustomButton({
  type,
  value,
  variant,
  onClick,
}: PrimaryCustomButtonProps) {
  return (
    <Button
      type={type}
      fontSize="1rem"
      fontWeight="bold"
      bg={variant.includes("primary") ? "customOrange" : "customRed"}
      minW="full"
      md={{ minW: "300px" }}
      onClick={onClick}
    >
      {value}
    </Button>
  );
}

export default PrimaryCustomButton;
