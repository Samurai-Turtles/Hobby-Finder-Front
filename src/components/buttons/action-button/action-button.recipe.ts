import { defineRecipe } from "@chakra-ui/react";

export const actionButtonRecipe = defineRecipe({
  variants: {
    visual: {
      default: {
        bg: "customOrange",
        color: "customWhite",
        _hover: {
          bg: "customOrange",
        },
      },
      alert: {
        bg: "customRed",
        color: "customWhite",
        _hover: {
          bg: "customRed",
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
