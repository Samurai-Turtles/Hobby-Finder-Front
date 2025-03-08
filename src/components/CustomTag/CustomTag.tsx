"use client";

import { Button, useRecipe } from "@chakra-ui/react";
import { customTagRecipe } from "./CustomTag.recipe";

interface CustomTagProps {
  texto: string;
  visual: "solid" | "outline";
}

function CustomTag({ texto, visual }: CustomTagProps) {
  const recipe = useRecipe({ recipe: customTagRecipe });
  const styles = recipe({ visual });

  return (
    <Button size="xs" rounded="full" css={styles}>
      {texto}
    </Button>
  );
}

export default CustomTag;
