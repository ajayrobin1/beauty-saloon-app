/** @type {import('tailwindcss').Config} */
import  colors from 'tailwindcss/colors'

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: colors.black,
        white: colors.white,
        gray: colors.zinc,
        green: colors.emerald,
        purple: colors.violet,
        red: colors.red,
        yellow: colors.amber,
        pink: colors.pink,
      },
    },
  },
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
  plugins: [],
};
