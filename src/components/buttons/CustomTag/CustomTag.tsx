"use client";

import { Button, useRecipe } from "@chakra-ui/react";
import { customTagRecipe } from "./CustomTag.recipe";
import { useState } from "react";

interface CustomTagProps {
  texto: string;
  visual: "solid" | "outline";
  disabled?: boolean;
}

function CustomTag({ texto, visual, disabled = false }: CustomTagProps) {
  const recipe = useRecipe({ recipe: customTagRecipe });
  const styleSolid = recipe({ visual: "solid" });
  const styleOutline = recipe({ visual: "outline" });
  const [currentStyle, setCurrentStyle] = useState<
    typeof styleSolid | typeof styleOutline
  >(visual === "solid" ? styleSolid : styleOutline);
  const toggleVisual = () => {
    setCurrentStyle((prevStyle) =>
      prevStyle === styleSolid ? styleOutline : styleSolid,
    );
  };

  return (
    <Button
      onClick={disabled ? () => {} : toggleVisual}
      size="xs"
      rounded="full"
      css={currentStyle}
    >
      {texto}
    </Button>
  );
}

export default CustomTag;
