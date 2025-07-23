// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        heading: ["var(--font-heading)", "serif"],
      },
    },
  },
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  plugins: [],
};

export default config;
