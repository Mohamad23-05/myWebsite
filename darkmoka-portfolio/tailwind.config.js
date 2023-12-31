/** @type {import('tailwindcss').Config} */
/*eslint-env node*/

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      },
      colors: {
        brown: {
          DEFAULT: "#462e23",
          50: "#edeae9",
          100: "#dad5d3",
          200: "#b5aba7",
          300: "#90827b",
          400: "#6b584f",
          500: "#462e23",
          600: "#38251c",
          700: "#2a1c15",
          800: "#1c120e",
          900: "#0e0907"
        },
        beige: { // Corrected spelling from "beige" to "beige"
          DEFAULT: "#e8d7b1",
          50: "#fdfbf7",
          100: "#faf7ef",
          200: "#f6efe0",
          300: "#f1e7d0",
          400: "#eddfc1",
          500: "#e8d7b1",
          600: "#baac8e",
          700: "#8b816a",
          800: "#5d5647",
          900: "#2e2b23"
        },
        green: {
          DEFAULT: "#007a78",
          50: "#e6f2f2",
          100: "#cce4e4",
          200: "#99cac9",
          300: "#66afae",
          400: "#339593",
          500: "#007a78",
          600: "#006260",
          700: "#004948",
          800: "#003130",
          900: "#001818"
        },
        grey: {
          DEFAULT: "#4a4a4a",
          50: "#ededed",
          100: "#dbdbdb",
          200: "#b7b7b7",
          300: "#929292",
          400: "#6e6e6e",
          500: "#4a4a4a",
          600: "#3b3b3b",
          700: "#2c2c2c",
          800: "#1e1e1e",
          900: "#0f0f0f"
        },
        "off-white": {
          DEFAULT: "#f5f5f5",
          50: "#fefefe",
          100: "#fdfdfd",
          200: "#fbfbfb",
          300: "#f9f9f9",
          400: "#f7f7f7",
          500: "#f5f5f5",
          600: "#c4c4c4",
          700: "#939393",
          800: "#626262",
          900: "#313131"
        }
      }
    },
  },
  plugins: [],
}
