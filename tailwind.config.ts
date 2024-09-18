import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
      "4k": "2560px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        "0.5": "0.125rem",
        "2.5": "0.625rem",
        "4.5": "1.125rem",
        "1/4": "25%",
      },
      margin: {
        "27": "6.9rem",
      },
      fontSize: {
        "sm-9": "9px",
        "xl-4": "34px",
      },
      font: {
        SegoeUIVariable: "Segoe UI Variable",
      },
      translate: {
        "x--1/2": "translate(-50%, -50%)",
      },
      colors: {
        verdigris: "#46b8b2",
        crystal: "#9fdad7",
        "msu-green": "#173c3a",
        "desaturated-cyan": "#61979a",
        "light-periwinkle": "#c8d1da",
        "police-blue": "#2f595f",
        fff005: "#FFFFFF0D",
        fff007: "#FFFFFF12",
        c88: "#888888",
        "white-transparent": "#ffffff15",
        fff018: "#FFFFFF2E",
        "30595F": "#30595F",
        "8A8A8A": "#8A8A8A",
        fff010: "#FFFFFF1A",
        "7289D9": "#7289D9",
        "0078D4": "#0078D4",
        A1AAB3: "#A1AAB3",
        C8D1DA: "#C8D1DA",
        "45B8B1": "#45B8B1",
        "969DA3": "#969DA3",
        "254C4C": "#254C4C",
        "1D4846": "#1D4846",
        "365C5E": "#365C5E",
        "5BC4BB": "#5BC4BB",
        A1B0B6: "#A1B0B6",
        "1b5155": "#1b5155",
        "#9FDAD6": "#9FDAD6",
        "2F4F4D": "#2F4F4D",
        "1B5155": "#1B5155",
        "1E2E66": "#1E2E66",
        DDE4FF: "#DDE4FF",
        "606060": "#606060",
        DDE5FF: "#DDE5FF",
        "2F50C3": "#2F50C3",
        "0A216F": "#0A216F",
        "212A4A": "#212A4A",
      },
      width: {
        "1/4-vw": "25vw",
        "2/5": "40%",
        "21": "5.19rem",
        "104": "26.06rem",
        "90": "23rem",
        "86": "20rem",
        "23": "5.45rem",
        "650px": "650px",
        "600px": "600px",
      },
      maxWidth: {
        "2/3": "66%",
      },
      height: {
        "21": "5.19rem",
        "13": "3.25rem",
        "711px": "711px",
      },
      maxHeight: {
        "full-vh": "100vh",
      },
      borderColor: {
        "white-transparent": "#ffffff15",
        "desaturated-cyan": "#61979a",
      },
      borderWidth: {
        "3px": "3px",
        "2px": "2px",
      },
      borderRadius: {
        "1.5xl": "0.88rem",
        "2.5xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
