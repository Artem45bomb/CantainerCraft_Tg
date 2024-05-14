import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        "0.5": "0.125rem",
        "2.5": "0.625rem",
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
        fff018: "#FFFFFF2E",
        "30595F": "#30595F",
        "8A8A8A": "#8A8A8A",
        fff010: "#FFFFFF1A",
        "7289D9": "#7289D9",
        A1AAB3: "#A1AAB3",
        C8D1DA: "#C8D1DA",
        "45B8B1": "#45B8B1",
      },
      width: {
        "2/5": "40%",
        "21": "5.19rem",
      },
      maxWidth: {
        "2/3": "66%",
      },
      height: {
        "21": "5.19rem",
        "13": "3.25rem",
      },
      borderColor: {
        "desaturated-cyan": "#61979a",
      },
      borderRadius: {
        "1.5xl": "0.88rem",
      },
    },
  },
  plugins: [],
};
export default config;
