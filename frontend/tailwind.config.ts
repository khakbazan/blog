import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./svg/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1273eb",

        "gray-1": "#f5f5f5",

        "black-1": "#2a2d53",
        "black-2": "#3f4264",
        "black-3": "#555775",
      },
      boxShadow: {
        primaryBlue: "0px 0px 2rem #1273eb60",
      },
    },
  },
  plugins: [],
};
export default config;
