import { Button, useRecipe } from "@chakra-ui/react";
import { X } from "@phosphor-icons/react";
import { tagRecipe } from "./tag.recipe";

interface TagProps {
  label: string;
  style: "solid" | "outline";
  disabled?: boolean;
  editClick?: (value: string) => void;
}

function Tag({ label, style, disabled = false, editClick }: TagProps) {
  const recipe = useRecipe({ recipe: tagRecipe });
  const styleSolid = recipe({ visual: style });

  return (
    <Button size="xs" rounded="full" css={styleSolid}>
      #{label}
      {disabled || <X size={32} onClick={() => editClick?.(label)} />}
    </Button>
  );
}

export default Tag;
