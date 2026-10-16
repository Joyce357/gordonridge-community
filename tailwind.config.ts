import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0F243E",
        "primary-dark": "#0A1626",
        "primary-container": "#13335A",
        "secondary": "#1B7A3E",
        "secondary-dark": "#135c2e",
        "secondary-container": "#D2F5D7",
        "secondary-fixed": "#34A853",
        "tertiary": "#F5A623",
        "tertiary-fixed": "#FBBF24",
        "tertiary-container": "#FEF08A",
        "surface": "#FDFBF7",
        "background": "#FDFBF7",
        "surface-mint": "#F0F7F2",
        "surface-warm-yellow": "#FFFDF0",
        "surface-cream": "#FBF7EE",
        "on-surface": "#0F1E2E",
        "on-surface-variant": "#4A5568"
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
};

export default config;
