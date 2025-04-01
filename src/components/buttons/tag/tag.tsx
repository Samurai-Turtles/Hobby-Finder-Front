import { Button, SystemStyleObject, useRecipe } from "@chakra-ui/react";
import { useState } from "react";
import { tagRecipe } from "./tag.recipe";
import { X } from "@phosphor-icons/react";

interface TagProps {
  label: string;
  style: "solid" | "outline";
  disabled?: boolean;
  editClick?: (value: string) => void;
}

function Tag({ label, style, disabled = false, editClick }: TagProps) {
  const recipe = useRecipe({ recipe: tagRecipe });
  const styleSolid = recipe({ visual: "solid" });
  const styleOutline = recipe({ visual: "outline" });

  const [currentStyle, setCurrentStyle] = useState<SystemStyleObject>(
    style === "solid" ? styleSolid : styleOutline,
  );

  // const handleVisualToggle = () => {
  //   if (!disabled) {
  //     setCurrentStyle((prevStyle) =>
  //       prevStyle === styleSolid ? styleOutline : styleSolid,
  //     );
  //   }
  // };

  return (
    <Button
      // onClick={handleVisualToggle}
      size="xs"
      rounded="full"
      css={currentStyle}
    >
      #{label}
      {disabled || <X size={32} onClick={() => editClick?.(label)} />}
    </Button>
  );
}

export default Tag;
