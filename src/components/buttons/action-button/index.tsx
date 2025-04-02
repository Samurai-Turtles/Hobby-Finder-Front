import { Button, ButtonProps, useRecipe } from "@chakra-ui/react";
import { actionButtonRecipe } from "./action-button.recipe";

interface ActionButtonProps extends ButtonProps {
  label: string;
  buttonStyle?: "default" | "alert" | "outline";
  action: (e: any) => void;
}

function ActionButton({
  label,
  buttonStyle = "default",
  action,
  ...props
}: ActionButtonProps) {
  const recipe = useRecipe({ recipe: actionButtonRecipe });
  const variantStyle = recipe({ visual: buttonStyle });

  return (
    <Button onClick={action} css={variantStyle} rounded={"md"} {...props}>
      {label}
    </Button>
  );
}

export default ActionButton;
