import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'xl': '1500px',
    },
    extend: {
      colors: {
        primary: "#1a2130",
        secondary: "rgb(129 140 248)",
      },
    },
  },
  plugins: [],
};
export default config;
