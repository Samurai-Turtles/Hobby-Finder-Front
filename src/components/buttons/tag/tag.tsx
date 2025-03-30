import { Button, SystemStyleObject, useRecipe } from "@chakra-ui/react";
import { useState } from "react";
import { tagRecipe } from "./tag.recipe";

interface TagProps {
  label: string;
  style: "solid" | "outline";
  disabled?: boolean;
}

function Tag({ label, style, disabled = false }: TagProps) {
  const recipe = useRecipe({ recipe: tagRecipe });
  const styleSolid = recipe({ visual: "solid" });
  const styleOutline = recipe({ visual: "outline" });

  const [currentStyle, setCurrentStyle] = useState<SystemStyleObject>(
    style === "solid" ? styleSolid : styleOutline,
  );

  const handleVisualToggle = () => {
    if (!disabled) {
      setCurrentStyle((prevStyle) =>
        prevStyle === styleSolid ? styleOutline : styleSolid,
      );
    }
  };

  return (
    <Button
      onClick={handleVisualToggle}
      size="xs"
      rounded="full"
      css={currentStyle}
    >
      {label}
    </Button>
  );
}

export default Tag;
