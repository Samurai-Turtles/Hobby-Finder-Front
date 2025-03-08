import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        orange: { value: "#FF9D00" },
        red: { value: "#FF4949" },
        black: { value: "#000000" },
        white: { value: "#FFFFFF" },
        lightGrey: { value: "#EFEFEF" },
        darkGrey: { value: "#848484" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
