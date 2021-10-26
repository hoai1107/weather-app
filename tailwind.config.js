const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'header': ['"Abril Fatface"','cursive'],
        'festive': ['"Festive"','cursive'],
        'poppins':['"Poppins"','sans-serif'],
        'quicksand':['"Quicksand"', 'sans-serif']
      }
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue,
      rose: colors.rose,
      bluegray: colors.blueGray,
      amber: colors.amber,
      lime: colors.lime,
      emerald: colors.emerald,
      cyan: colors.cyan,
      indigo: colors.indigo,
      green: colors.green,
      purple: colors.purple,
      pink: colors.pink,
      'cool-gray': colors.coolGray,
      sky: colors.sky,
      orange: colors.orange
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
