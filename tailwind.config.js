/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html,js?css}", "index.html"],
  theme: {
    extend: {
      backgroundImage: {
        welcome: 'url(/assets/pexels-cottonbro-5483071.jpg)'
      },
      fontFamily: {
        'sans': ['Josefin Sans', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}