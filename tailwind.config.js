/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      fontFamily: { 
        'megrim': ['Megrim','system-ui','sans-serif'],
        'fahkwang': ['Fahkwang','system-ui','sans-serif'] 
    }, 
      fontWeight: {
        megrimbold: '1900',
      }
    },
    
  },
  plugins: [],
}

