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
        cream: "#FAF7F2",
        "cream-dark": "#F3EDE4",
        charcoal: "#2C2825",
        burgundy: "#8B2635",
        "burgundy-dark": "#6E1E2A",
        amber: "#C9933A",
        "amber-light": "#D4A54E",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      lineHeight: {
        relaxed: "1.75",
        loose: "1.8",
      },
    },
  },
  plugins: [],
};
export default config;
