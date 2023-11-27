const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#0F0E0E',
      'orange': '#E55812',
      'gray': '#C4CBCA'
    }, 
    extend: {},
  },
  plugins: [],
});