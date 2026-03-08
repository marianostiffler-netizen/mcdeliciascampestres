import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF7",
          100: "#FFF9E8",
          200: "#FFF3D1",
          300: "#FFE8A8",
          400: "#FFD970",
          500: "#FFC837",
        },
        warm: {
          50: "#FDF8F3",
          100: "#FAEDDE",
          200: "#F5D9BC",
          300: "#EFC093",
          400: "#E8A265",
          500: "#D4844A",
          600: "#B8693A",
          700: "#8F5130",
          800: "#6B3D26",
          900: "#4A2B1C",
        },
        olive: {
          50: "#F6F7F0",
          100: "#E8EBD5",
          200: "#D4D9B0",
          300: "#B8C07E",
          400: "#9AA85A",
          500: "#7D8C42",
          600: "#626F34",
          700: "#4B542A",
          800: "#3D4425",
          900: "#343A22",
        },
        berry: {
          50: "#FDF2F4",
          100: "#FCE7EB",
          200: "#F9D0D9",
          300: "#F4A9BA",
          400: "#ED7A96",
          500: "#E04D73",
          600: "#CC2D5A",
          700: "#AB2049",
          800: "#8F1E40",
          900: "#7A1D3B",
        },
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "serif"],
        body: ["system-ui", "-apple-system", "sans-serif"],
        handwriting: ["Georgia", "serif"],
      },
      backgroundImage: {
        "grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
