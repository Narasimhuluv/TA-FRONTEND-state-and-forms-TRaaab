var colors = require('tailwindcss/colors')
module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors : {
        "cyan" :  colors.cyan
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
