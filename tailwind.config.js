/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        megrim: ["Megrim", "system-ui", "sans-serif"],
        fahkwang: ["Fahkwang", "system-ui", "sans-serif"],
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
    },
  },
  plugins: [],
};
