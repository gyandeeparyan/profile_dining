/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      
      },
      colors: {
        scrollbarColor:"hsl(var(--button-color-light))",
        mainDark: "hsl(var(--main-color-dark))",
        accentDark: "hsl(var(--accent-color-dark))",
        highlightDark: "hsl(var(--highlight-color-dark))",
        textDark: "hsl(var(--text-color-dark))",
        backgroundDark: "hsl(var(--background-color-dark))",
        buttonDark: "hsl(var(--button-color-dark))",
        cardDark: "hsl(var(--card-color-dark))",
        mainLight: "hsl(var(--main-color-light))",
        accentLight: "hsl(var(--accent-color-light))",
        highlightLight: "hsl(var(--highlight-color-light))",
        textLight: "hsl(var(--text-color-light))",
        backgroundLight: "hsl(var(--background-color-light))",
        buttonLight: "hsl(var(--button-color-light))",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
