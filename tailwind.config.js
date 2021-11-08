const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors : {
      white : colors.white,
      black : colors.black,
      orange : colors.orange,
      gray : colors.gray,
      red : colors.red,
      yellow :colors.yellow
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://source.unsplash.com/random/1280x100')"
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
