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
        verdigris: "#46b8b2",
        crystal: "#9fdad7",
        "msu-green": "#173c3a",
        "desaturated-cyan": "#61979a",
        "light-periwinkle": "#c8d1da",
        "police-blue": "#2f595f",
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
