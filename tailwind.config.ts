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
      colors: {
        "light-gray": "#ECECEC",
        "purple-light": "#6358DC",
        "violet-light": "#3500D3",
        dark: "#202020",
        "dark-blue": "#000000",
        gray: "#A1AAB3",
        violet: "#240090",
        "violet-dark": "#0C0032",
      },
      width: {
        "2/5": "40%",
      },
      maxWidth: {
        "2/3": "66%",
      },
    },
  },
  plugins: [],
};
export default config;
