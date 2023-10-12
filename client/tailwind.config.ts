import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        AboutPage01: "url('/BG/page01BG.jpg')",
        page020408: "url('/BG/page020408BG.jpg')",
      },
      colors: {
        studioBackground: "black",
        menu: {
          bg: "#d8d8d8",
          text: "black",
        },
        content: {
          text: "white",
        },
      },
      fontFamily: {
        appleSD: ["AppleSDGothicNeo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
