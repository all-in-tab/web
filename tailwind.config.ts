import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kakao: {
          yellow: "#FEE500",
          brown: "#3C1E1E",
        },
      },
    },
  },
  plugins: [],
};

export default config;
