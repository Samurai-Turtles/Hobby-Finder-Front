import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        customOrange: { value: "#FF9D00" },
        customRed: { value: "#FF4949" },
        customBlack: { value: "#000000" },
        customWhite: { value: "#FFFFFF" },
        customLightGrey: { value: "#EFEFEF" },
        customDarkGrey: { value: "#848484" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
