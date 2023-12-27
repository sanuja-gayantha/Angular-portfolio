/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['"Outfit"', ...defaultTheme.fontFamily.sans],
        'megrim': ['"Megrim"', ...defaultTheme.fontFamily.sans],
        // 'fahkwang': ['"Fahkwang"', ...defaultTheme.fontFamily.sans],
      },
      grayscale: {
        10: "10%",
        20: "20%",
        30: "30%",
        35: "35%",
        40: "40%",
        50: "50%",
      },
      opacity: {
        9:"0.09"
      },
      colors: {
        'primary': '#54595F',
        'primary-2': '#1f1437',
        'secondery':'#dc3545',
      },
    },
  },
  plugins: [],
};
