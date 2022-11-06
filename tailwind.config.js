const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        gray: {
          75: "#F5F1EF",
        },
      },
      fontFamily: {
        qanelas: ["Qanelas", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
