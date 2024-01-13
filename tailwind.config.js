/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "hovercol": '#eb98a9',
      "normalcol": '#e66378',
      "darkercol": '#E03E59',
      "defaultcol": '#63AC4D',
      "linkcol": '#DD2C4A'
    },
  },
  plugins: [],
}