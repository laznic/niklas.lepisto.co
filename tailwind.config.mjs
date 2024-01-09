/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: "hsl(var(--color-primary) / <alpha-value>)",
      separator: "hsl(var(--color-separator) / <alpha-value>)",
      background: "hsl(var(--color-background) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
