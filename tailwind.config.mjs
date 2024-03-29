/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        // Courtesy of https://www.fluid-type-scale.com/calculate
        sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        md: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        lg: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
        xl: "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
        "2xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
        "3xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
        "4xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
        "5xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)",
        "6xl": "clamp(5.96rem, 10.69vw + 3.29rem, 11.84rem)",
      },
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        separator: "hsl(var(--color-separator) / <alpha-value>)",
        background: "hsl(var(--color-background) / <alpha-value>)",
      },
      keyframes: {
        "jump-in": {
          "0%": {
            transform: "scale(0%)",
          },
          "70%": {
            transform: "scale(105%)",
          },
          "100%": {
            transform: "scale(100%)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),
    require("tailwindcss-3d"),
  ],
};
