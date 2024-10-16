import { defineConfig, transformerDirectives } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      indigo: "#7D7ABC",
      violet: "#6457A6",
      mustard: "#FFE347",
      ink: "#181528",
      smoke: "#BDBBDD",
    },
  },
  transformers: [transformerDirectives()],
});
