import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        diarreia: "#ccb24c",
        areia: " #f7d683",
        creme: " #fffdc0",
        branco: " #fffffd",
        azul: " #457d97",
      },
    },
  },
  plugins: [],
};
export default config;
