/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        'primaryOne' : '#8d7b68',
        'primaryTwo' : '#a4907c',
        'primaryThree' : '#c8b6a6',
        'primaryFour': '#f1dec9',
        
      },
    },
    // fontFamily: {
    //   sans: ["var(--font-poppins)"],
    //   stock: [defaultTheme.fontFamily.sans],
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
})
