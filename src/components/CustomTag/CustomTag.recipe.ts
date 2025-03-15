import { defineRecipe } from "@chakra-ui/react";

export const customTagRecipe = defineRecipe({
  variants: {
    visual: {
      solid: {
        bg: "customOrange",
        color: "customWhite",
        _hover: {
          bg: "customOrange",
        },
      },
      outline: {
        bg: "none",
        color: "customOrange",
        borderWidth: "1px",
        borderColor: "customOrange",
        _hover: {
          bg: "customWhite",
        },
      },
    },
  },
});
