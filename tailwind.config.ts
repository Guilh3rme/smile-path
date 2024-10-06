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
        primary: "#2CC785", // Verde-claro
        background: "#F8F8FF",
        accent: "#4EA9AA",
        accent_opacity:"#95DDDE",
        navbar: "#1D3A5F", // Azul escuro da navegação
        text: "#333333", // Preto/cinza escuro
        "text-inverse": "#FFFFFF", // Branco
        grayblue: {
          50: "#F1F4F6", // Tom mais claro
          100: "#D6DEE3",
          200: "#A2B3BC",
          300: "#748A95",
          400: "#4D6168",
          500: "#3C4E57",
          600: "#2E3B42",
          700: "#2B3841", // Cor de destaque
          800: "#2E3B42",
          900: "#232F36", // Tom mais escuro
        },
      },
    },
  },

  plugins: [],
};
export default config;
