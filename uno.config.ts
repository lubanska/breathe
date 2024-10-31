import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  theme: {
    colors: {
      indigo: "#BFBCDC",
      violet: "#322B50",
      mustard: "#FFE347",
      ink: "#181528",
      smoke: "#BDBBDD",
    },
  },
  transformers: [transformerDirectives()],
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Lato",
        serif: "Lustria",
      },
    }),
    presetIcons(),
  ],
});
