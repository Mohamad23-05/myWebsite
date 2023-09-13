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
      }
    },

  },
  plugins: [],
}